import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledSubscription = styled.section`
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: ${colors.white};
`;

export const StyledForm = styled.form`
  max-width: 960px;
  margin: 50px auto;

  button {
    margin: 20px 0;

    &:hover {
      background-color: ${colors.blue};
    }
  }
`;

export const StyledFormItem = styled.div`
  display: block;
`;

export const StyledFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }

  ${StyledFormItem} {
    width: ${(props) => (props.column ? `48.5%` : `100%`)};

    @media screen and (max-width: 520px) {
      width: 100%;
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`;
