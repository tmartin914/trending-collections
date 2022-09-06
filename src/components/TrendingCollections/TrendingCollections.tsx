import { useQuery } from '@apollo/client';
import { WalletConnectionProps } from '../../WalletConnectionProps';
import { QUERY_TRENDING_COLLECTIONS } from './query';

/**
 * Component to retrieve and display the trending collection data
 * @param walletConnected flag indicating whether the ETH wallet is connected
 * @returns trending collections data as html
 */
export const TrendingCollections: React.FC<WalletConnectionProps> = ({walletConnected}) => {
  /**
   * Calls the get trending collections query
   */
  const { data } = useQuery<any>( // TODO: add error handling to this. Give it a specific return type
    QUERY_TRENDING_COLLECTIONS,
  );

  return (
    <div>
      <h3>Trending Collections</h3>
      { !walletConnected ? (
        <p>Connect Wallet to view</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Sales</th>
              <th>Average</th>
              <th>Ceiling</th>
              <th>Floor</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {data && data.trendingCollections && data.trendingCollections.edges.map((edge: any) => (
              <tr>
                <td>{edge.node.name}</td>
                <td>{edge.node.stats.totalSales}</td>
                <td>{edge.node.stats.average}</td>
                <td>{edge.node.stats.ceiling}</td>
                <td>{edge.node.stats.floor}</td>
                <td>{edge.node.stats.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default TrendingCollections;