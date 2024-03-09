/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    ...CartItem\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    ...CartItem\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n  }\n}": types.CartFindOrCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItem on Cart {\n  id\n  items {\n    ...CartItemProduct\n  }\n}": types.CartItemFragmentDoc,
    "fragment CartItemProduct on CartItem {\n  quantity\n  product {\n    id\n    name\n    price\n    images {\n      url\n    }\n  }\n}": types.CartItemProductFragmentDoc,
    "mutation cartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    ...CartItem\n  }\n}": types.CartRemoveItemDocument,
    "fragment ProductCollection on Collection {\n  id\n  name\n  slug\n}": types.ProductCollectionFragmentDoc,
    "query ProductGetCategories {\n  categories(take: 3) {\n    data {\n      name\n      slug\n      id\n    }\n  }\n}": types.ProductGetCategoriesDocument,
    "query ProductGetCollections {\n  collections {\n    data {\n      ...ProductCollection\n    }\n  }\n}": types.ProductGetCollectionsDocument,
    "query ProductGetListByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetListByCategoryDocument,
    "query ProductGetListByCollection($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductGetListByCollectionDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListBySearchDocument,
    "query ProductsGetSingleItemById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductsGetSingleItemByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  price\n  description\n  images {\n    url\n  }\n  categories {\n    id\n    name\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetList($productsNumber: Int, $productsSkip: Int) {\n  products(take: $productsNumber, skip: $productsSkip) {\n    data {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItem on Cart {\n  id\n  items {\n    ...CartItemProduct\n  }\n}"): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItemProduct on CartItem {\n  quantity\n  product {\n    id\n    name\n    price\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').CartItemProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation cartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCollection on Collection {\n  id\n  name\n  slug\n}"): typeof import('./graphql').ProductCollectionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetCategories {\n  categories(take: 3) {\n    data {\n      name\n      slug\n      id\n    }\n  }\n}"): typeof import('./graphql').ProductGetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetCollections {\n  collections {\n    data {\n      ...ProductCollection\n    }\n  }\n}"): typeof import('./graphql').ProductGetCollectionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetListByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetListByCollection($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductGetListByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSingleItemById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetSingleItemByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  price\n  description\n  images {\n    url\n  }\n  categories {\n    id\n    name\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($productsNumber: Int, $productsSkip: Int) {\n  products(take: $productsNumber, skip: $productsSkip) {\n    data {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
