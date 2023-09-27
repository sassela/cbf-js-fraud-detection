import { render, fireEvent, screen } from '@testing-library/react';
import RuleModal from '../components/RuleModal';

describe('RuleModal', () => {
  it('renders the modal with form elements', () => {
    const onCloseMock = jest.fn();
    const onSubmitMock = jest.fn();
    const nProperties = 28;

    render(
      <RuleModal show={true} onClose={onCloseMock} onSubmit={onSubmitMock} />
    );

    expect(screen.getByText('Create Rule')).toBeInTheDocument();

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByText('Properties')).toBeInTheDocument();

    const propertyInputs = screen.getAllByPlaceholderText(/V\d+/);
    expect(propertyInputs).toHaveLength(nProperties);

    expect(screen.getByText('Save Rule')).toBeInTheDocument();
  });

  it('calls the onClose and onSubmit functions when submitting the form', () => {
    const onCloseMock = jest.fn();
    const onSubmitMock = jest.fn();

    render(
      <RuleModal show={true} onClose={onCloseMock} onSubmit={onSubmitMock} />
    );

    const nameInput = screen.getByLabelText('Name');
    const propertyInputs = screen.getAllByPlaceholderText(/V\d+/);

    fireEvent.change(nameInput, { target: { value: 'Test Rule' } });
    fireEvent.change(propertyInputs[0], { target: { value: '1.23' } });
    fireEvent.change(propertyInputs[1], { target: { value: '2.34' } });

    const submitButton = screen.getByText('Save Rule');
    fireEvent.click(submitButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
