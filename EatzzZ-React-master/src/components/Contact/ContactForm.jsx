import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 30px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #000000;
  margin-bottom: 20px;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #ff6600;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #ff6600;
  }
`;

const Button = styled.button`
  background-color: #ff6600;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #e65c00;
  }
`;

// Main Component
const ContactForm = () => {
  return (
    <Container>
      <Wrapper>
        {/* Left Side - Text Section */}
        <LeftSection>
          <Heading>GEORGE'S <span style={{ color: '#ff0000' }}>CATERING</span></Heading>
          <SubHeading>CONTACT US</SubHeading>
          <Text>
            George's Hot Dogs offers some of the best Greek & American Chicago street food prepared fresh
            and made-to-order for your special event. With over 70 years in restaurant and catering experience,
            you can trust in our food and quality.
          </Text>
          <Text>
            Contact us for a free consultation and let us help you create your ideal event.
          </Text>
        </LeftSection>

        {/* Right Side - Form Section */}
        <RightSection>
          <Form>
            <Label>Your Name</Label>
            <Input type="text" placeholder="Enter your name" />

            <Label>Your Email</Label>
            <Input type="email" placeholder="Enter your email" />

            <Label>Your Message</Label>
            <TextArea rows="5" placeholder="Enter your message" />

            <Button type="submit">Send</Button>
          </Form>
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default ContactForm;
