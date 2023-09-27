import React, { useState } from 'react';
import { Rule } from '../types/Rule';
import { Property } from '../types/Property';

interface RuleModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (rule: Rule) => void;
}

const RuleModal = ({ show, onClose, onSubmit }: RuleModalProps) => {
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const [ruleName, setRuleName] = useState<string>('');

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const handleRuleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRuleName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const properties: Property[] = [];
    selectedValues.forEach((value, index) => {
      if (!isNaN(value)) {
        properties.push({
          propertyName: `V${index + 1}`,
          propertyValue: value,
        });
      }
    });

    const rule: Rule = {
      ruleName,
      properties,
    };

    onSubmit(rule);

    setSelectedValues([]);
    setRuleName('');
    onClose();
  };

  const propertiesCount = 28;

  return (
    <div className={`modal${show ? ' d-block' : ' d-none'}`} tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Rule</h5>
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
              data-testid="rule-modal-close"
            />
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
                        type="number"
                        step="0.01"
                        name={"V" + (n + 1)}
                        onChange={handleNumericChange}
                        placeholder={"V" + (n + 1)}
                        id={"value-"+n}
                      />
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
