import { useState, useEffect } from 'react';
import RuleModal from '../components/RuleModal';
import { Rule } from '../types/Rule';
import HeaderRow from '../components/HeaderRow';
import Table from '../components/Table';

interface RuleItemProps {
  rule: Rule;
}

function RuleItem({ rule }: RuleItemProps) {
  return (
    <>
      {rule.properties.map((property, index) => (
        <span key={index}>
          {property.propertyName}: {property.propertyValue}
          {index < rule.properties.length - 1 ? ', ' : ''}
        </span>
      ))}
    </>
  );
}

const Head = () => {
  return (
    <tr>
      <th>Name</th>
      <th>Properties</th>
    </tr>
  )
}

interface BodyProps {
  rules: Rule[]
}

const Body = ({ rules }: BodyProps) => {
  return (
    <>
      {rules.map((rule, index) => (
        <tr key={index}>
          <td>{rule.ruleName}</td>
          <td><RuleItem key={index} rule={rule} /></td>
        </tr>
      ))}
    </>
  )
}

const RulesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [rules, setRules] = useState<Rule[]>([]);

  useEffect(() => {
    const storedRules = JSON.parse(localStorage.getItem('rules') || '[]');
    setRules(storedRules);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (rule: Rule) => {
    const updatedRules = [...rules, rule];

    // Update local storage with the updated rules
    localStorage.setItem('rules', JSON.stringify(updatedRules));

    setRules(updatedRules);
  };

  return (
    <div>
      <HeaderRow
        headingText='Rules'
        ctaOnClick={openModal}
        ctaText='New Rule'
      />

      <RuleModal show={showModal} onClose={closeModal} onSubmit={handleSubmit} />

      <Table
        head={<Head />}
        body={<Body rules={rules} />}
      />
    </div>
  );
};

export default RulesPage;
