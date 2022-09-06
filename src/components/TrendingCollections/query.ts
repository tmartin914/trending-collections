import { gql } from '@apollo/client';

export const QUERY_TRENDING_COLLECTIONS = gql`
    query TrendingCollections {
        trendingCollections {
        edges {
            node {
            address
            ... on ERC721Contract {
                name
                stats {
                totalSales
                average
                ceiling
                floor
                volume
                }
                symbol
            }
            }
        }
        }
    }
`;