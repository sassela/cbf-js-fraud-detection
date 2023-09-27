import React, { useState } from 'react';
import { Rule } from '../types/Rule';

interface RuleModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (rule:Rule) => void;
}

const RuleModal = ({ show, onClose, onSubmit }: RuleModalProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [ruleName, setRuleName] = useState<string>('');

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };

  const handleRuleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRuleName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ruleName, selectedValues});
    setSelectedValues([]);
    setRuleName('');
    onClose();
  };

  const propertiesCount = 28;

  return (
    <div className={`modal${show ? ' d-block' : ''}`} tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Rule</h5>
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-2">
                <label className="form-label" htmlFor="rule-name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={ruleName}
                  onChange={handleRuleNameChange}
                  required
                  id="rule-name"
                />
              </div>
              <div className="form-group">
                <label>Select Rules:</label>
                <div>
                  {Array.from(Array(propertiesCount).keys()).map((n: number) => (
                    <label key={n} htmlFor={"value-"+n}>
                      <input
                        type="checkbox"
                        name={"V" + (n + 1)}
<<<<<<< Updated upstream
                        value={"V" + (n + 1)}
                        checked={selectedValues.includes("V" + (n + 1))}
                        onChange={handleCheckboxChange}
                      />{' '}
                      {"V" + (n + 1)}
=======
                        onChange={handleNumericChange}
                        placeholder={"V" + (n + 1)}
                        id={"value-"+n}
                      />
>>>>>>> Stashed changes
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Save Rule
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleModal;
