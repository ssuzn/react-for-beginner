import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
  <Container>
    <Box>
    <StyledImg src={coverImg} alt={title} />
    <Title>
      {/* Link : 링크 페이지로 넘어갈 때 새로고침 하지 않음 */}
      <StyledLink to={`/movie/${id}`}>{title}</StyledLink> 
      <Summary>
        {summary.length > 0 ?
        (summary.length > 235 ? `${summary.slice(0, 235)}...` : summary) : 'Sorry😥 There is No Summary'}
        </Summary>
      <StyledUl>
        {genres.map(g => (
          <StyledLi key={g}>{g}</StyledLi>
        ))}
      </StyledUl>
    </Title>
    </Box>
  </Container>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  box-shadow:  0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 10px;
  padding: 20px 20px 20px 10px;
  width: 80%;
  height: 100%;
`;

const StyledImg = styled.img`
  position: relative;
  max-width: 150px;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
`;

const Summary = styled.p`
  display: flex;
  font-size: 18px;
  font-weight: 400;
`

const StyledLink = styled(Link)`
  color: black;
  margin-bottom: 5px;
  text-decoration: ${(props) => props.deco || 'none'};
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;

`;

const StyledLi = styled.li`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  color: green;
`;

export default Movie;