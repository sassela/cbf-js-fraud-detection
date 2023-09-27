import { render, fireEvent, getByTestId, queryByRole, getAllByRole } from '@testing-library/react';
import RulesPage from '../pages/RulesPage';


test('renders RulesPage component with no rules initially', () => {
  localStorage.setItem("rules", JSON.stringify([]));

  const { getByText, queryAllByText } = render(<RulesPage />);

  expect(getByText(/Rules/)).toBeInTheDocument();
  expect(getByText(/Create Rule/)).toBeInTheDocument();
  expect(queryAllByText(/Name/)[0]).toBeInTheDocument();
  expect(queryAllByText(/Properties/)[0]).toBeInTheDocument();
});

test('renders RulesPage component with rules', () => {
  const mockRules = [
    {
      ruleName: 'Rule 1',
      properties: [{ propertyName: 'Prop1', propertyValue: 'Value1' }],
    },
    {
      ruleName: 'Rule 2',
      properties: [{ propertyName: 'Prop2', propertyValue: 'Value2' }],
    },
  ];

  localStorage.setItem("rules", JSON.stringify(mockRules));

  const { getByText, queryAllByText } = render(<RulesPage />);

  expect(getByText(/Rules/)).toBeInTheDocument();
  expect(getByText(/New Rule/)).toBeInTheDocument();
  expect(queryAllByText(/Name/)[0]).toBeInTheDocument();
  expect(queryAllByText(/Properties/)[0]).toBeInTheDocument();

  mockRules.forEach((rule) => {
    expect(getByText(rule.ruleName)).toBeInTheDocument();
    expect(getByText(`${rule.properties[0].propertyName}: ${rule.properties[0].propertyValue}`)).toBeInTheDocument();
  });
});

test('opens and closes RuleModal when "New Rule" button is clicked', () => {
  const { getByText, queryByText, getByTestId } = render(<RulesPage />);

  expect(getByText(/New Rule/)).toBeInTheDocument();

  fireEvent.click(getByText('New Rule'));

  expect(queryByText('Create Rule')).toBeVisible();

  fireEvent.click(getByTestId("rule-modal-close"));

  // expect(queryByText('Create Rule')).not.toBeVisible();
});
