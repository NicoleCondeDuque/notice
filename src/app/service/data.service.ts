import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private apollo: Apollo) {}

  getArticles(apiKey: string) {
    const query = gql`
      query ExampleQuery($apiKey: String!) {
        articles(apiKey: $apiKey) {
          articles {
            author
            content
            description
            title
            urlToImage
          }
        }
      }
    `;

    return this.apollo.watchQuery<Data>({
      query,
      variables: {
        apiKey,
      },
    }).valueChanges;
  }
}
