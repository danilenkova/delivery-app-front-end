import {
  Wrapper,
  StyledForm,
  FormLabel,
  FormField,
  FormInput,
} from "./OrderForm.styled";

const OrderForm = (props) => {
  const { name, email, phone, address, handleInputChange } = props;
  return (
    <Wrapper>
      <StyledForm>
        <FormLabel>
          <FormField>Name</FormField>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={handleInputChange}
            value={name}
            required
          />
        </FormLabel>
        <FormLabel>
          <FormField>Email</FormField>
          <FormInput
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            placeholder="example@example.com"
            autoComplete="off"
            onChange={handleInputChange}
            value={email}
            required
          />
        </FormLabel>
        <FormLabel>
          <FormField>Phone</FormField>
          <FormInput
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            autoComplete="off"
            onChange={handleInputChange}
            value={phone}
            required
          />
        </FormLabel>
        <FormLabel>
          <FormField>Address</FormField>
          <FormInput
            type="text"
            name="address"
            pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Enter your Address"
            autoComplete="off"
            onChange={handleInputChange}
            value={address}
            required
          />
        </FormLabel>
      </StyledForm>
    </Wrapper>
  );
};

export default OrderForm;
