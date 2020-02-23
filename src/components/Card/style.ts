import styled from 'styled-components';

export const CustomCard = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`;

export const ProductDescription = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-shrink: 0;
`;

export const ProductTitle = styled.span`
	font-size: 20px;
	line-height: 1.3333334;
	font-weight: 500;
	letter-spacing: -.5px;
	word-break: break-word;
	text-align: left;
	color: #414141;
`;


export const Weight = styled.div`
	font-size: 13px;
	font-weight: 400;
	line-height: 1.31;
	letter-spacing: -.3px;
	text-align: right;
	color: #414141;
	min-width: 35px;
	padding-top: 4px;
	white-space: nowrap;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`;

export const Date = styled.h3`
  margin: 0 1rem 0.5rem 1rem;
  color: gray;
`;

export const ReadingTime = styled.h4`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`;

export const Excerpt = styled.p`
  color: #414141;
  padding-top: 10px;
  font-size: 15px;
  line-height: 1.33;
  letter-spacing: -.4px;
  text-align: left;
`;

export const CardFooter = styled.div`
	width: 100%;
`;

export const Price = styled.div`
	color: #414141;
	font-size: 24px;
	font-weight: 500;
	letter-spacing: -.6px;
	text-align: left;
	white-space: nowrap;
`;

export const Currency = styled.label`
	font-family: rouble;
	font-size: 100%;
	font-weight: 400;
	display: inline-block;
`;
