import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledSubscription = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export const StyledForm = styled.form`
  button {
    margin: 20px 0;

    &:hover {
      background-color: ${colors.blue};
    }
  }
`;

export const StyledFormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledFormItem = styled.div`
  display: block;
  width: ${(props) => (props.column ? `48.5%` : `100%`)};
`;
