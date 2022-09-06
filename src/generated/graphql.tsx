import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

/** A base contract */
export type BaseContract = Contract & {
  __typename?: 'BaseContract';
  address: Scalars['String'];
  /** Statistics related to a token's traits/attributes. */
  attributes: Array<Maybe<ContractAttribute>>;
  isVerified: Scalars['Boolean'];
  /** The log history for this contract */
  logs?: Maybe<LogConnection>;
  /** A token under this contract */
  token?: Maybe<Token>;
  tokenStandard?: Maybe<TokenStandard>;
  tokens?: Maybe<TokenConnection>;
};


/** A base contract */
export type BaseContractLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};


/** A base contract */
export type BaseContractTokenArgs = {
  tokenId: Scalars['String'];
};


/** A base contract */
export type BaseContractTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

/** A base log */
export type BaseLog = Log & {
  __typename?: 'BaseLog';
  /** The block number for this log */
  blockNumber: Scalars['Int'];
  /** The Contract related to this log */
  contract: Contract;
  /** The contract address for this log */
  contractAddress: Scalars['String'];
  /** The estimated time the transaction was confirmed at */
  estimatedConfirmedAt: Scalars['Date'];
  /** The from Wallet related to this log */
  from?: Maybe<Wallet>;
  /** The from address for this log */
  fromAddress: Scalars['String'];
  /** This log index -- logs are unique by the transaction_hash + log_index */
  logIndex: Scalars['Int'];
  /** The to Wallet related to this log */
  to?: Maybe<Wallet>;
  /** The to address for this log */
  toAddress: Scalars['String'];
  /** The Token related to this log */
  token?: Maybe<Token>;
  /** The Transaction related to this log */
  transaction?: Maybe<Transaction>;
  /** The address of the wallet that created this transaction */
  transactionCreator?: Maybe<Scalars['String']>;
  /** The transaction hash for this log */
  transactionHash: Scalars['String'];
  /** The type of log this is: Order, Mint, Transfer, etc. */
  type: LogType;
};

/** A base token */
export type BaseToken = Token & {
  __typename?: 'BaseToken';
  /** The attributes of the token. */
  attributes: Array<Maybe<TokenAttribute>>;
  /** The contract standard for the token. */
  contract: Contract;
  /** An array of image locations and sizes for the token. */
  images: Array<Maybe<TokenImage>>;
  /** The log history for this token */
  logs?: Maybe<LogConnection>;
  tokenId: Scalars['String'];
};


/** A base token */
export type BaseTokenLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};

/** A contract */
export type Contract = {
  address: Scalars['String'];
  /** Statistics related to a token's traits/attributes. */
  attributes: Array<Maybe<ContractAttribute>>;
  isVerified: Scalars['Boolean'];
  /** The log history for this contract */
  logs?: Maybe<LogConnection>;
  /** A token under this contract */
  token?: Maybe<Token>;
  tokenStandard?: Maybe<TokenStandard>;
  tokens?: Maybe<TokenConnection>;
};


/** A contract */
export type ContractLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};


/** A contract */
export type ContractTokenArgs = {
  tokenId: Scalars['String'];
};


/** A contract */
export type ContractTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

/** A contract's attribute count */
export type ContractAttribute = {
  __typename?: 'ContractAttribute';
  /** The trait key. */
  name: Scalars['String'];
  /** The `100 * value_count / total_tokens for the contract. */
  rarity?: Maybe<Scalars['Float']>;
  /** The value of the trait. */
  value?: Maybe<Scalars['String']>;
  /** The total count for this name: value pair in the contract. */
  valueCount: Scalars['Int'];
  /**
   * The total count for this name: value pair in the contract.
   * @deprecated Moved to "valueCount".
   */
  value_count: Scalars['Int'];
};

/** A connection to a list of items. */
export type ContractConnection = {
  __typename?: 'ContractConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ContractEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContractEdge = {
  __typename?: 'ContractEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Contract>;
};

/** A contract's stats for a given timeframe */
export type ContractStats = {
  __typename?: 'ContractStats';
  /** Average price */
  average?: Maybe<Scalars['Float']>;
  /** Ceiling price */
  ceiling?: Maybe<Scalars['Float']>;
  /** Floor price */
  floor?: Maybe<Scalars['Float']>;
  /** Total number of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Total volume */
  volume?: Maybe<Scalars['Float']>;
};

/** Filters available to the "contracts" query */
export type ContractsFilterInput = {
  /** The address of the contract */
  address?: InputMaybe<StringInput>;
  /** The name of the contract */
  name?: InputMaybe<SearchStringInput>;
  /** The symbol of the contract */
  symbol?: InputMaybe<SearchStringInput>;
};

export enum ContractsOrderByEnum {
  /**
   * Sort contracts by average sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
   * @deprecated Use the trendingCollections query instead.
   */
  Average = 'AVERAGE',
  /**
   * Sort contracts by max sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
   * @deprecated Use the trendingCollections query instead.
   */
  Ceiling = 'CEILING',
  /**
   * Sort contracts by min sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
   * @deprecated Use the trendingCollections query instead.
   */
  Floor = 'FLOOR',
  /** Sort contracts alphabetically by name */
  Name = 'NAME',
  /**
   * Sort contracts by number of sales. Defaults to within last hour, use timeframe on "stats" to further filter.
   * @deprecated Use the trendingCollections query instead.
   */
  Sales = 'SALES',
  /** Sort contracts alphabetically by symbol */
  Symbol = 'SYMBOL',
  /**
   * Sort contracts by volume. Defaults to within last hour, use timeframe on "stats" to further filter.
   * @deprecated Use the trendingCollections query instead.
   */
  Volume = 'VOLUME'
}

export type DateInputType = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
};

/** An ERC-721 contract */
export type Erc721Contract = Contract & {
  __typename?: 'ERC721Contract';
  address: Scalars['String'];
  /** Statistics related to a token's traits/attributes. */
  attributes: Array<Maybe<ContractAttribute>>;
  circulatingSupply?: Maybe<Scalars['Int']>;
  isVerified: Scalars['Boolean'];
  /** The log history for this contract */
  logs?: Maybe<LogConnection>;
  /** The name of the contract */
  name?: Maybe<Scalars['String']>;
  stats?: Maybe<ContractStats>;
  /** The symbol of the contract */
  symbol?: Maybe<Scalars['String']>;
  /** A token under this contract */
  token?: Maybe<Token>;
  tokenStandard?: Maybe<TokenStandard>;
  tokens?: Maybe<TokenConnection>;
  /** See OpenSea's docs for Collection.banner_image_url. This field is marked unsafe due to the fact OpenSea metadata can change at anytime and we may not have recent changes to this data. */
  unsafeOpenseaBannerImageUrl?: Maybe<Scalars['String']>;
  /** See OpenSea's docs for Collection.description. This field is marked unsafe due to the fact OpenSea metadata can change at anytime and we may not have recent changes to this data. */
  unsafeOpenseaDescription?: Maybe<Scalars['String']>;
  /** See OpenSea's docs for Collection.external_url. This field is marked unsafe due to the fact OpenSea metadata can change at anytime and we may not have recent changes to this data. */
  unsafeOpenseaExternalUrl?: Maybe<Scalars['String']>;
  /** See OpenSea's docs for Collection.image_url. This field is marked unsafe due to the fact OpenSea metadata can change at anytime and we may not have recent changes to this data. */
  unsafeOpenseaImageUrl?: Maybe<Scalars['String']>;
  /** See OpenSea's docs for Collection.slug. This field is marked unsafe due to the fact OpenSea metadata can change at anytime and we may not have recent changes to this data. */
  unsafeOpenseaSlug?: Maybe<Scalars['String']>;
};


/** An ERC-721 contract */
export type Erc721ContractLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};


/** An ERC-721 contract */
export type Erc721ContractStatsArgs = {
  timeRange?: InputMaybe<DateInputType>;
};


/** An ERC-721 contract */
export type Erc721ContractTokenArgs = {
  tokenId: Scalars['String'];
};


/** An ERC-721 contract */
export type Erc721ContractTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type Erc721ContractConnection = {
  __typename?: 'ERC721ContractConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Erc721ContractEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type Erc721ContractEdge = {
  __typename?: 'ERC721ContractEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Erc721Contract>;
};

/** An ERC721 standard metadata. Return any keys matching the ERC721 standard and ignore non-conforming keys. */
export type Erc721Metadata = {
  __typename?: 'ERC721Metadata';
  animation_url?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<Erc721MetadataAttribute>>>;
  background_color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  external_url?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  image_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  youtube_url?: Maybe<Scalars['String']>;
};

/** A Metadata Attribute. Return the attribute keys for the ERC721 standard. */
export type Erc721MetadataAttribute = {
  __typename?: 'ERC721MetadataAttribute';
  display_type?: Maybe<Scalars['String']>;
  trait_type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** An ERC721 token */
export type Erc721Token = Token & {
  __typename?: 'ERC721Token';
  /** The attributes of the token. */
  attributes: Array<Maybe<TokenAttribute>>;
  /** The contract standard for the token. */
  contract: Contract;
  /** An array of image locations and sizes for the token. */
  images: Array<Maybe<TokenImage>>;
  /** The log history for this token */
  logs?: Maybe<LogConnection>;
  metadata?: Maybe<Erc721Metadata>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Wallet>;
  ownerAddress?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  tokenId: Scalars['String'];
};


/** An ERC721 token */
export type Erc721TokenLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};

export type IntegerInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
};

/** A log */
export type Log = {
  /** The block number for this log */
  blockNumber: Scalars['Int'];
  /** The Contract related to this log */
  contract: Contract;
  /** The contract address for this log */
  contractAddress: Scalars['String'];
  /** The estimated time the transaction was confirmed at */
  estimatedConfirmedAt: Scalars['Date'];
  /** The from Wallet related to this log */
  from?: Maybe<Wallet>;
  /** The from address for this log */
  fromAddress: Scalars['String'];
  /** This log index -- logs are unique by the transaction_hash + log_index */
  logIndex: Scalars['Int'];
  /** The to Wallet related to this log */
  to?: Maybe<Wallet>;
  /** The to address for this log */
  toAddress: Scalars['String'];
  /** The Token related to this log */
  token?: Maybe<Token>;
  /** The Transaction related to this log */
  transaction?: Maybe<Transaction>;
  /** The address of the wallet that created this transaction */
  transactionCreator?: Maybe<Scalars['String']>;
  /** The transaction hash for this log */
  transactionHash: Scalars['String'];
  /** The type of log this is: Order, Mint, Transfer, etc. */
  type: LogType;
};

/** A connection to a list of items. */
export type LogConnection = {
  __typename?: 'LogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LogEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LogEdge = {
  __typename?: 'LogEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Log>;
};

export enum LogOrderMarketplace {
  Cryptopunks = 'CRYPTOPUNKS',
  Gem = 'GEM',
  Genie = 'GENIE',
  Looksrare = 'LOOKSRARE',
  Niftygateway = 'NIFTYGATEWAY',
  Opensea = 'OPENSEA',
  X2Y2 = 'X2Y2',
  Zerox = 'ZEROX'
}

export enum LogType {
  Mint = 'MINT',
  Order = 'ORDER',
  Transfer = 'TRANSFER'
}

/** Filter by type */
export type LogTypeInput = {
  eq?: InputMaybe<LogType>;
  in?: InputMaybe<Array<LogType>>;
  notIn?: InputMaybe<Array<LogType>>;
};

/** Filter input for logs */
export type LogsFilterInputType = {
  /** Filter logs by their block number */
  blockNumber?: InputMaybe<IntegerInput>;
  /** Filter logs by contract address */
  contractAddress?: InputMaybe<StringInput>;
  /** Filter logs by their estimated confirmation date */
  estimatedConfirmedAt?: InputMaybe<DateInputType>;
  /** Filter logs by the "from" wallet */
  fromAddress?: InputMaybe<StringInput>;
  /** Filter logs by marketplace */
  marketplace?: InputMaybe<OrderMarketplaceInput>;
  /** Filter logs by the "to" wallet */
  toAddress?: InputMaybe<StringInput>;
  /** Filter logs by their type */
  type?: InputMaybe<LogTypeInput>;
  /** Filter logs by their type */
  typeIn?: InputMaybe<Array<LogType>>;
};

/** A Mint log */
export type MintLog = Log & {
  __typename?: 'MintLog';
  /** The block number for this log */
  blockNumber: Scalars['Int'];
  /** The Contract related to this log */
  contract: Contract;
  /** The contract address for this log */
  contractAddress: Scalars['String'];
  /** The estimated time the transaction was confirmed at */
  estimatedConfirmedAt: Scalars['Date'];
  /** The from Wallet related to this log */
  from?: Maybe<Wallet>;
  /** The from address for this log */
  fromAddress: Scalars['String'];
  /** This log index -- logs are unique by the transaction_hash + log_index */
  logIndex: Scalars['Int'];
  /** The to Wallet related to this log */
  to?: Maybe<Wallet>;
  /** The to address for this log */
  toAddress: Scalars['String'];
  /** The Token related to this log */
  token?: Maybe<Token>;
  /** The Transaction related to this log */
  transaction?: Maybe<Transaction>;
  /** The address of the wallet that created this transaction */
  transactionCreator?: Maybe<Scalars['String']>;
  /** The transaction hash for this log */
  transactionHash: Scalars['String'];
  /** The type of log this is: Order, Mint, Transfer, etc. */
  type: LogType;
};

/** The root of all... mutations */
export type Mutations = {
  __typename?: 'Mutations';
  /**
   * Queues a job to refresh of the metadata of a specific token or every token in a collection.
   *     If tokenId is omitted, it will queue a refresh for every token in the collection.
   *      Only trigger a refresh of the entire collection if absolutely necessary.
   */
  refreshTokenMetadata: RefreshMetadataStatusMessage;
};


/** The root of all... mutations */
export type MutationsRefreshTokenMetadataArgs = {
  input: RefreshTokenMetadataInput;
};

export enum OrderDirectionEnum {
  /** Sort ascending (A-Z) */
  Asc = 'ASC',
  /** Sort descending (Z-A) */
  Desc = 'DESC'
}

/** A Order log */
export type OrderLog = Log & {
  __typename?: 'OrderLog';
  /** The block number for this log */
  blockNumber: Scalars['Int'];
  /** The Contract related to this log */
  contract: Contract;
  /** The contract address for this log */
  contractAddress: Scalars['String'];
  /** The estimated time the transaction was confirmed at */
  estimatedConfirmedAt: Scalars['Date'];
  /** The from Wallet related to this log */
  from?: Maybe<Wallet>;
  /** The from address for this log */
  fromAddress: Scalars['String'];
  /** This log index -- logs are unique by the transaction_hash + log_index */
  logIndex: Scalars['Int'];
  /** The marketplace this Order was placed on: OpenSea, Genie, etc. */
  marketplace?: Maybe<LogOrderMarketplace>;
  /** The price paid in Ethereum */
  priceInEth: Scalars['Float'];
  /** The to Wallet related to this log */
  to?: Maybe<Wallet>;
  /** The to address for this log */
  toAddress: Scalars['String'];
  /** The Token related to this log */
  token?: Maybe<Token>;
  /** The Transaction related to this log */
  transaction?: Maybe<Transaction>;
  /** The address of the wallet that created this transaction */
  transactionCreator?: Maybe<Scalars['String']>;
  /** The transaction hash for this log */
  transactionHash: Scalars['String'];
  /** The type of log this is: Order, Mint, Transfer, etc. */
  type: LogType;
};

/** Filter by marketplace */
export type OrderMarketplaceInput = {
  eq?: InputMaybe<LogOrderMarketplace>;
  in?: InputMaybe<Array<LogOrderMarketplace>>;
  notIn?: InputMaybe<Array<LogOrderMarketplace>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export enum RefreshMetadataStatusMessage {
  Completed = 'COMPLETED',
  CompletedToken = 'COMPLETED_TOKEN',
  Error = 'ERROR',
  ErrorToken = 'ERROR_TOKEN',
  Queued = 'QUEUED',
  QueuedToken = 'QUEUED_TOKEN'
}

export type RefreshTokenMetadataInput = {
  contractAddress: Scalars['String'];
  /** Include to refresh a specific token's metadata */
  tokenId?: InputMaybe<Scalars['String']>;
};

/** The root of all... queries */
export type RootQuery = {
  __typename?: 'RootQuery';
  /** Fetches a contract */
  contract?: Maybe<Contract>;
  /** Fetches all contracts with default sorting alphabetically by name */
  contracts?: Maybe<ContractConnection>;
  /** Fetches all logs sorted by descending estimatedConfirmedAt */
  logs?: Maybe<LogConnection>;
  /** Fetches a token */
  token?: Maybe<Token>;
  /** Fetches a list of trending collections with default sorting by descending sales. */
  trendingCollections?: Maybe<ContractConnection>;
  /** Fetches a wallet. Provide either a wallet address or ensName. The query will use address if both are provided. */
  wallet?: Maybe<Wallet>;
};


/** The root of all... queries */
export type RootQueryContractArgs = {
  address: Scalars['String'];
};


/** The root of all... queries */
export type RootQueryContractsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ContractsFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContractsOrderByEnum>;
  orderDirection?: InputMaybe<OrderDirectionEnum>;
};


/** The root of all... queries */
export type RootQueryLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};


/** The root of all... queries */
export type RootQueryTokenArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


/** The root of all... queries */
export type RootQueryTrendingCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TrendingCollectionsOrderByEnum>;
  orderDirection?: InputMaybe<OrderDirectionEnum>;
  timePeriod?: InputMaybe<TrendingCollectionsTimePeriodEnum>;
  timeRange?: InputMaybe<DateInputType>;
};


/** The root of all... queries */
export type RootQueryWalletArgs = {
  address?: InputMaybe<Scalars['String']>;
  ensName?: InputMaybe<Scalars['String']>;
};

export type SearchStringInput = {
  contains?: InputMaybe<Scalars['String']>;
  endswith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  icontains?: InputMaybe<Scalars['String']>;
  iendswith?: InputMaybe<Scalars['String']>;
  ieq?: InputMaybe<Scalars['String']>;
  istartswith?: InputMaybe<Scalars['String']>;
  startswith?: InputMaybe<Scalars['String']>;
};

export type StringInput = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** A token */
export type Token = {
  /** The attributes of the token. */
  attributes: Array<Maybe<TokenAttribute>>;
  /** The contract standard for the token. */
  contract: Contract;
  /** An array of image locations and sizes for the token. */
  images: Array<Maybe<TokenImage>>;
  /** The log history for this token */
  logs?: Maybe<LogConnection>;
  tokenId: Scalars['String'];
};


/** A token */
export type TokenLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};

/** A token attribute */
export type TokenAttribute = {
  __typename?: 'TokenAttribute';
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute value */
  value: Scalars['String'];
};

/** A connection to a list of items. */
export type TokenConnection = {
  __typename?: 'TokenConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TokenEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TokenEdge = {
  __typename?: 'TokenEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Token>;
};

/** An uploaded token image */
export type TokenImage = {
  __typename?: 'TokenImage';
  /** Height in pixels of token image */
  height?: Maybe<Scalars['Int']>;
  /** The mime type of the image */
  mimeType?: Maybe<Scalars['String']>;
  /** CDN served image URLs in various sizes or as SVG */
  url: Scalars['String'];
  /** Width in pixels of token image */
  width?: Maybe<Scalars['Int']>;
};

export enum TokenStandard {
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

/** Tokens filter */
export type TokensFilterInputType = {
  contractAddressIn?: InputMaybe<Array<Scalars['String']>>;
};

/** A transaction */
export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['Int'];
  /** The number of confirmations for this transaction */
  confirmations: Scalars['Int'];
  /** The estimated time the transaction was confirmed at */
  estimatedConfirmedAt: Scalars['Date'];
  /** The from Wallet related to this transaction */
  from?: Maybe<Wallet>;
  fromAddress: Scalars['String'];
  /** The amount of gas supplied for this transaction to happen */
  gasLimit: Scalars['Int'];
  /** Cost in Gwei per unit of gas for this transaction. */
  gasPrice?: Maybe<Scalars['Float']>;
  /** The amount of gas used by this transaction */
  gasUsed: Scalars['Int'];
  hash: Scalars['String'];
  /** The log history for this token */
  logs?: Maybe<LogConnection>;
  /** Max gas fee in Gwei */
  maxGasFee?: Maybe<Scalars['Float']>;
  /** Max gas priority fee in Gwei */
  maxGasPriorityFee?: Maybe<Scalars['Float']>;
  /** The to Wallet related to this transaction */
  to?: Maybe<Wallet>;
  toAddress?: Maybe<Scalars['String']>;
  /** Transaction fee in ETH */
  transactionFeeInEth: Scalars['Float'];
  transactionIndex: Scalars['String'];
  /** The transaction type */
  type?: Maybe<Scalars['Int']>;
  /** The value being transacted in ETH */
  valueInEth: Scalars['Float'];
};


/** A transaction */
export type TransactionLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TransactionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Transaction>;
};

/** Filter input for transactions */
export type TransactionsFilterInputType = {
  /** Filter transactions by their block number */
  blockNumber?: InputMaybe<IntegerInput>;
  /** Filter transactions by their estimated confirmation date */
  estimatedConfirmedAt?: InputMaybe<DateInputType>;
  /** Filter transactions by the "from" wallet */
  fromAddress?: InputMaybe<StringInput>;
  /** Filter transactions by the "to" wallet */
  toAddress?: InputMaybe<StringInput>;
};

/** A Transfer log */
export type TransferLog = Log & {
  __typename?: 'TransferLog';
  /** The block number for this log */
  blockNumber: Scalars['Int'];
  /** The Contract related to this log */
  contract: Contract;
  /** The contract address for this log */
  contractAddress: Scalars['String'];
  /** The estimated time the transaction was confirmed at */
  estimatedConfirmedAt: Scalars['Date'];
  /** The from Wallet related to this log */
  from?: Maybe<Wallet>;
  /** The from address for this log */
  fromAddress: Scalars['String'];
  /** This log index -- logs are unique by the transaction_hash + log_index */
  logIndex: Scalars['Int'];
  /** The to Wallet related to this log */
  to?: Maybe<Wallet>;
  /** The to address for this log */
  toAddress: Scalars['String'];
  /** The Token related to this log */
  token?: Maybe<Token>;
  /** The Transaction related to this log */
  transaction?: Maybe<Transaction>;
  /** The address of the wallet that created this transaction */
  transactionCreator?: Maybe<Scalars['String']>;
  /** The transaction hash for this log */
  transactionHash: Scalars['String'];
  /** The type of log this is: Order, Mint, Transfer, etc. */
  type: LogType;
};

export enum TrendingCollectionsOrderByEnum {
  /** Sort contracts by average sale price within a given time range. Defaults to within last hour. */
  Average = 'AVERAGE',
  /** Sort contracts by number of sales. Defaults to within last hour. */
  Sales = 'SALES',
  /** Sort contracts by volume. Defaults to within last hour. */
  Volume = 'VOLUME'
}

export enum TrendingCollectionsTimePeriodEnum {
  /** Last 24 hours */
  OneDay = 'ONE_DAY',
  /** Last hour */
  OneHour = 'ONE_HOUR',
  /** Last 7 days */
  SevenDays = 'SEVEN_DAYS',
  /** Last 12 hours */
  TwelveHours = 'TWELVE_HOURS'
}

/** A wallet */
export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  ensName?: Maybe<Scalars['String']>;
  /** The held collections for a wallet */
  heldCollections?: Maybe<Erc721ContractConnection>;
  /** The log history for this wallet */
  logs?: Maybe<LogConnection>;
  /** A token owned by this wallet, if it exists */
  token?: Maybe<Token>;
  /** A list of tokens owned by this wallet */
  tokens?: Maybe<TokenConnection>;
  /** The transaction history for this wallet */
  transactions?: Maybe<TransactionConnection>;
};


/** A wallet */
export type WalletHeldCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


/** A wallet */
export type WalletLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<LogsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};


/** A wallet */
export type WalletTokenArgs = {
  contractAddress: Scalars['String'];
  tokenId: Scalars['String'];
};


/** A wallet */
export type WalletTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TokensFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};


/** A wallet */
export type WalletTransactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TransactionsFilterInputType>;
  first?: InputMaybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BaseContract: ResolverTypeWrapper<BaseContract>;
  BaseLog: ResolverTypeWrapper<BaseLog>;
  BaseToken: ResolverTypeWrapper<BaseToken>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contract: ResolversTypes['BaseContract'] | ResolversTypes['ERC721Contract'];
  ContractAttribute: ResolverTypeWrapper<ContractAttribute>;
  ContractConnection: ResolverTypeWrapper<ContractConnection>;
  ContractEdge: ResolverTypeWrapper<ContractEdge>;
  ContractStats: ResolverTypeWrapper<ContractStats>;
  ContractsFilterInput: ContractsFilterInput;
  ContractsOrderByEnum: ContractsOrderByEnum;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateInputType: DateInputType;
  ERC721Contract: ResolverTypeWrapper<Erc721Contract>;
  ERC721ContractConnection: ResolverTypeWrapper<Erc721ContractConnection>;
  ERC721ContractEdge: ResolverTypeWrapper<Erc721ContractEdge>;
  ERC721Metadata: ResolverTypeWrapper<Erc721Metadata>;
  ERC721MetadataAttribute: ResolverTypeWrapper<Erc721MetadataAttribute>;
  ERC721Token: ResolverTypeWrapper<Erc721Token>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntegerInput: IntegerInput;
  Log: ResolversTypes['BaseLog'] | ResolversTypes['MintLog'] | ResolversTypes['OrderLog'] | ResolversTypes['TransferLog'];
  LogConnection: ResolverTypeWrapper<LogConnection>;
  LogEdge: ResolverTypeWrapper<LogEdge>;
  LogOrderMarketplace: LogOrderMarketplace;
  LogType: LogType;
  LogTypeInput: LogTypeInput;
  LogsFilterInputType: LogsFilterInputType;
  MintLog: ResolverTypeWrapper<MintLog>;
  Mutations: ResolverTypeWrapper<{}>;
  OrderDirectionEnum: OrderDirectionEnum;
  OrderLog: ResolverTypeWrapper<OrderLog>;
  OrderMarketplaceInput: OrderMarketplaceInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  RefreshMetadataStatusMessage: RefreshMetadataStatusMessage;
  RefreshTokenMetadataInput: RefreshTokenMetadataInput;
  RootQuery: ResolverTypeWrapper<{}>;
  SearchStringInput: SearchStringInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringInput: StringInput;
  Token: ResolversTypes['BaseToken'] | ResolversTypes['ERC721Token'];
  TokenAttribute: ResolverTypeWrapper<TokenAttribute>;
  TokenConnection: ResolverTypeWrapper<TokenConnection>;
  TokenEdge: ResolverTypeWrapper<TokenEdge>;
  TokenImage: ResolverTypeWrapper<TokenImage>;
  TokenStandard: TokenStandard;
  TokensFilterInputType: TokensFilterInputType;
  Transaction: ResolverTypeWrapper<Transaction>;
  TransactionConnection: ResolverTypeWrapper<TransactionConnection>;
  TransactionEdge: ResolverTypeWrapper<TransactionEdge>;
  TransactionsFilterInputType: TransactionsFilterInputType;
  TransferLog: ResolverTypeWrapper<TransferLog>;
  TrendingCollectionsOrderByEnum: TrendingCollectionsOrderByEnum;
  TrendingCollectionsTimePeriodEnum: TrendingCollectionsTimePeriodEnum;
  Wallet: ResolverTypeWrapper<Wallet>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BaseContract: BaseContract;
  BaseLog: BaseLog;
  BaseToken: BaseToken;
  Boolean: Scalars['Boolean'];
  Contract: ResolversParentTypes['BaseContract'] | ResolversParentTypes['ERC721Contract'];
  ContractAttribute: ContractAttribute;
  ContractConnection: ContractConnection;
  ContractEdge: ContractEdge;
  ContractStats: ContractStats;
  ContractsFilterInput: ContractsFilterInput;
  Date: Scalars['Date'];
  DateInputType: DateInputType;
  ERC721Contract: Erc721Contract;
  ERC721ContractConnection: Erc721ContractConnection;
  ERC721ContractEdge: Erc721ContractEdge;
  ERC721Metadata: Erc721Metadata;
  ERC721MetadataAttribute: Erc721MetadataAttribute;
  ERC721Token: Erc721Token;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  IntegerInput: IntegerInput;
  Log: ResolversParentTypes['BaseLog'] | ResolversParentTypes['MintLog'] | ResolversParentTypes['OrderLog'] | ResolversParentTypes['TransferLog'];
  LogConnection: LogConnection;
  LogEdge: LogEdge;
  LogTypeInput: LogTypeInput;
  LogsFilterInputType: LogsFilterInputType;
  MintLog: MintLog;
  Mutations: {};
  OrderLog: OrderLog;
  OrderMarketplaceInput: OrderMarketplaceInput;
  PageInfo: PageInfo;
  RefreshTokenMetadataInput: RefreshTokenMetadataInput;
  RootQuery: {};
  SearchStringInput: SearchStringInput;
  String: Scalars['String'];
  StringInput: StringInput;
  Token: ResolversParentTypes['BaseToken'] | ResolversParentTypes['ERC721Token'];
  TokenAttribute: TokenAttribute;
  TokenConnection: TokenConnection;
  TokenEdge: TokenEdge;
  TokenImage: TokenImage;
  TokensFilterInputType: TokensFilterInputType;
  Transaction: Transaction;
  TransactionConnection: TransactionConnection;
  TransactionEdge: TransactionEdge;
  TransactionsFilterInputType: TransactionsFilterInputType;
  TransferLog: TransferLog;
  Wallet: Wallet;
};

export type BaseContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseContract'] = ResolversParentTypes['BaseContract']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<Maybe<ResolversTypes['ContractAttribute']>>, ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<BaseContractLogsArgs>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<BaseContractTokenArgs, 'tokenId'>>;
  tokenStandard?: Resolver<Maybe<ResolversTypes['TokenStandard']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<ResolversTypes['TokenConnection']>, ParentType, ContextType, Partial<BaseContractTokensArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseLog'] = ResolversParentTypes['BaseLog']> = {
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedConfirmedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  toAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  transactionCreator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LogType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseToken'] = ResolversParentTypes['BaseToken']> = {
  attributes?: Resolver<Array<Maybe<ResolversTypes['TokenAttribute']>>, ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['TokenImage']>>, ParentType, ContextType>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<BaseTokenLogsArgs>>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  __resolveType: TypeResolveFn<'BaseContract' | 'ERC721Contract', ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<Maybe<ResolversTypes['ContractAttribute']>>, ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<ContractLogsArgs>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<ContractTokenArgs, 'tokenId'>>;
  tokenStandard?: Resolver<Maybe<ResolversTypes['TokenStandard']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<ResolversTypes['TokenConnection']>, ParentType, ContextType, Partial<ContractTokensArgs>>;
};

export type ContractAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContractAttribute'] = ResolversParentTypes['ContractAttribute']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rarity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContractConnection'] = ResolversParentTypes['ContractConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContractEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContractEdge'] = ResolversParentTypes['ContractEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContractStats'] = ResolversParentTypes['ContractStats']> = {
  average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ceiling?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  floor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalSales?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type Erc721ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Contract'] = ResolversParentTypes['ERC721Contract']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<Maybe<ResolversTypes['ContractAttribute']>>, ParentType, ContextType>;
  circulatingSupply?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<Erc721ContractLogsArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['ContractStats']>, ParentType, ContextType, Partial<Erc721ContractStatsArgs>>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Erc721ContractTokenArgs, 'tokenId'>>;
  tokenStandard?: Resolver<Maybe<ResolversTypes['TokenStandard']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<ResolversTypes['TokenConnection']>, ParentType, ContextType, Partial<Erc721ContractTokensArgs>>;
  unsafeOpenseaBannerImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsafeOpenseaDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsafeOpenseaExternalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsafeOpenseaImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsafeOpenseaSlug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721ContractConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721ContractConnection'] = ResolversParentTypes['ERC721ContractConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ERC721ContractEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721ContractEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721ContractEdge'] = ResolversParentTypes['ERC721ContractEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ERC721Contract']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Metadata'] = ResolversParentTypes['ERC721Metadata']> = {
  animation_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ERC721MetadataAttribute']>>>, ParentType, ContextType>;
  background_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  external_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721MetadataAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721MetadataAttribute'] = ResolversParentTypes['ERC721MetadataAttribute']> = {
  display_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trait_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Token'] = ResolversParentTypes['ERC721Token']> = {
  attributes?: Resolver<Array<Maybe<ResolversTypes['TokenAttribute']>>, ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['TokenImage']>>, ParentType, ContextType>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<Erc721TokenLogsArgs>>;
  metadata?: Resolver<Maybe<ResolversTypes['ERC721Metadata']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  ownerAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  __resolveType: TypeResolveFn<'BaseLog' | 'MintLog' | 'OrderLog' | 'TransferLog', ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedConfirmedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  toAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  transactionCreator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LogType'], ParentType, ContextType>;
};

export type LogConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogConnection'] = ResolversParentTypes['LogConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['LogEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogEdge'] = ResolversParentTypes['LogEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Log']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['MintLog'] = ResolversParentTypes['MintLog']> = {
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedConfirmedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  toAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  transactionCreator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LogType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutations'] = ResolversParentTypes['Mutations']> = {
  refreshTokenMetadata?: Resolver<ResolversTypes['RefreshMetadataStatusMessage'], ParentType, ContextType, RequireFields<MutationsRefreshTokenMetadataArgs, 'input'>>;
};

export type OrderLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLog'] = ResolversParentTypes['OrderLog']> = {
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedConfirmedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  marketplace?: Resolver<Maybe<ResolversTypes['LogOrderMarketplace']>, ParentType, ContextType>;
  priceInEth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  toAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  transactionCreator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LogType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQuery'] = ResolversParentTypes['RootQuery']> = {
  contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<RootQueryContractArgs, 'address'>>;
  contracts?: Resolver<Maybe<ResolversTypes['ContractConnection']>, ParentType, ContextType, Partial<RootQueryContractsArgs>>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<RootQueryLogsArgs>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<RootQueryTokenArgs, 'contractAddress' | 'tokenId'>>;
  trendingCollections?: Resolver<Maybe<ResolversTypes['ContractConnection']>, ParentType, ContextType, Partial<RootQueryTrendingCollectionsArgs>>;
  wallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType, Partial<RootQueryWalletArgs>>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  __resolveType: TypeResolveFn<'BaseToken' | 'ERC721Token', ParentType, ContextType>;
  attributes?: Resolver<Array<Maybe<ResolversTypes['TokenAttribute']>>, ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  images?: Resolver<Array<Maybe<ResolversTypes['TokenImage']>>, ParentType, ContextType>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<TokenLogsArgs>>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TokenAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenAttribute'] = ResolversParentTypes['TokenAttribute']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenConnection'] = ResolversParentTypes['TokenConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TokenEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenEdge'] = ResolversParentTypes['TokenEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenImage'] = ResolversParentTypes['TokenImage']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  confirmations?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  estimatedConfirmedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gasLimit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<TransactionLogsArgs>>;
  maxGasFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxGasPriorityFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  toAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionFeeInEth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  transactionIndex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  valueInEth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionConnection'] = ResolversParentTypes['TransactionConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['TransactionEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionEdge'] = ResolversParentTypes['TransactionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransferLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransferLog'] = ResolversParentTypes['TransferLog']> = {
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  estimatedConfirmedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  toAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  transactionCreator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LogType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ensName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heldCollections?: Resolver<Maybe<ResolversTypes['ERC721ContractConnection']>, ParentType, ContextType, Partial<WalletHeldCollectionsArgs>>;
  logs?: Resolver<Maybe<ResolversTypes['LogConnection']>, ParentType, ContextType, Partial<WalletLogsArgs>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<WalletTokenArgs, 'contractAddress' | 'tokenId'>>;
  tokens?: Resolver<Maybe<ResolversTypes['TokenConnection']>, ParentType, ContextType, Partial<WalletTokensArgs>>;
  transactions?: Resolver<Maybe<ResolversTypes['TransactionConnection']>, ParentType, ContextType, Partial<WalletTransactionsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BaseContract?: BaseContractResolvers<ContextType>;
  BaseLog?: BaseLogResolvers<ContextType>;
  BaseToken?: BaseTokenResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  ContractAttribute?: ContractAttributeResolvers<ContextType>;
  ContractConnection?: ContractConnectionResolvers<ContextType>;
  ContractEdge?: ContractEdgeResolvers<ContextType>;
  ContractStats?: ContractStatsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  ERC721Contract?: Erc721ContractResolvers<ContextType>;
  ERC721ContractConnection?: Erc721ContractConnectionResolvers<ContextType>;
  ERC721ContractEdge?: Erc721ContractEdgeResolvers<ContextType>;
  ERC721Metadata?: Erc721MetadataResolvers<ContextType>;
  ERC721MetadataAttribute?: Erc721MetadataAttributeResolvers<ContextType>;
  ERC721Token?: Erc721TokenResolvers<ContextType>;
  Log?: LogResolvers<ContextType>;
  LogConnection?: LogConnectionResolvers<ContextType>;
  LogEdge?: LogEdgeResolvers<ContextType>;
  MintLog?: MintLogResolvers<ContextType>;
  Mutations?: MutationsResolvers<ContextType>;
  OrderLog?: OrderLogResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  RootQuery?: RootQueryResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenAttribute?: TokenAttributeResolvers<ContextType>;
  TokenConnection?: TokenConnectionResolvers<ContextType>;
  TokenEdge?: TokenEdgeResolvers<ContextType>;
  TokenImage?: TokenImageResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  TransactionConnection?: TransactionConnectionResolvers<ContextType>;
  TransactionEdge?: TransactionEdgeResolvers<ContextType>;
  TransferLog?: TransferLogResolvers<ContextType>;
  Wallet?: WalletResolvers<ContextType>;
};

