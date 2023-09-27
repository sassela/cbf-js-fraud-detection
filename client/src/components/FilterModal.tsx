import { useState } from 'react';
import { Rule } from '../types/Rule';
import { Link } from 'react-router-dom';

interface FilterModalProps {
  rules: Rule[];
  onClose: () => void;
  onSubmit: (rule: Rule | null) => void;
}

const FilterModal = ({ rules, onClose, onSubmit }: FilterModalProps) => {
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);

  const handleRuleSelect = (rule: Rule) => {
    setSelectedRule(rule);
    console.log('Selected Rule:', rule);
  };

  return (
    <div className="modal fade show" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Filter Rules</h5>
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {rules.length === 0 ? (
              <p>No rules found. Please visit the <Link to="/rules">Rules Page</Link> to add rules.</p>
            ) : (
              <ul>
                {rules.map((rule, index) => (
                  <li key={index} onClick={() => handleRuleSelect(rule)}>
                    {rule.ruleName}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => onSubmit(selectedRule)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
