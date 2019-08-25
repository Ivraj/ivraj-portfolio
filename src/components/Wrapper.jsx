import styled from '@emotion/styled';

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  background: ${props => props.theme.colors.black};
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 0 1.5rem;
  }
`;

export default Wrapper;
