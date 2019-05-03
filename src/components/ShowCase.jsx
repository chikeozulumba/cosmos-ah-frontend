import React from 'react';
import styled from 'styled-components';
import { Grid, Icon } from 'semantic-ui-react';
import moment from 'moment';
import pic from './arya.jpeg';

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  display: block !important;
`;

const ShowCaseArticle = styled.section``;
const ShowCaseIntroTextHeading = styled.h3`
  font-size: 2.5em;
  margin-bottom: 0;
`;
const ShowCaseIntroTextTagLine = styled.p`
  width: 50%;
`;

const ShowCaseArticleImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

const ShowCaseArticleAuthor = styled.div``;
const ShowCaseAppTitle = styled.span`
  display: block;
`;

const StyledCategory = styled.span`
  color: orange;  
`;

const ShowCase = ({ article }) => (
  <Grid as="section" columns="2">
    <Grid.Row>
      <Grid.Column>
        <ShowCaseIntroTextHeading>
          Welcome to&nbsp;
        <ShowCaseAppTitle>Author's Haven</ShowCaseAppTitle>
        </ShowCaseIntroTextHeading>
        <ShowCaseIntroTextTagLine>
          Creating a community of like-minded authors
          who foster inspiration and innovation by
          leveraging the modern web.
      </ShowCaseIntroTextTagLine>
      </Grid.Column>
      <Grid.Column>
        <ShowCaseArticle>
          <ImageContainer>
            <ShowCaseArticleImage src={pic} alt="" />
          </ImageContainer>
          <ShowCaseIntroTextTagLine>
            <h3>{article.title}</h3>
            <p>{article.body.slice(0, 150)}....</p>
          </ShowCaseIntroTextTagLine>
          <ShowCaseArticleAuthor>
            <p>{article.author} in <StyledCategory>Politics</StyledCategory></p>
            <p>{moment(article.createdAt).format('DDD Mo')}
              <span>&nbsp;&middot;&nbsp;
              {article.totalReadTime} {article.totalReadTime > 1 ? 'Mins' : 'Min'} read &nbsp;
              <Icon name="star" size="small" color="lightgrey" />
            </span>
            </p>
          </ShowCaseArticleAuthor>
        </ShowCaseArticle>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ShowCase;