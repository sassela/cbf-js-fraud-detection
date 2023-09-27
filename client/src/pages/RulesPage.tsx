import { useState, useEffect } from 'react';
import RuleModal from '../components/RuleModal';
import { Rule } from '../types/Rule';

interface RuleItemProps {
  rule: Rule;
}

function RuleItem({ rule }: RuleItemProps) {
  return (
    <li>
      Rule Name: {rule.ruleName}, Properties: {rule.selectedValues.join(', ')}
    </li>
  );
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

  const handleSubmit = ({ruleName, selectedValues}:Rule) => {
    const newRule = {
      ruleName,
      selectedValues,
    };

    const updatedRules = [...rules, newRule];

    // Update the local storage with the updated rules
    localStorage.setItem('rules', JSON.stringify(updatedRules));

    setRules(updatedRules);
  };

  return (
    <div>
      <h2>Rules Page</h2>
      <button className="btn btn-primary" onClick={openModal}>
        New Rule
      </button>

      <RuleModal show={showModal} onClose={closeModal} onSubmit={handleSubmit} />

      <h3>Rules:</h3>
      <ul>
        {rules.map((rule, index) => (
          <RuleItem key={index} rule={rule} />
        ))}
      </ul>
    </div>
  );
};

export default RulesPage;
