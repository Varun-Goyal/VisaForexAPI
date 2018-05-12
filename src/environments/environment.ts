// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'https://conduit.productionready.io/api',
  currency_api_url: 'http://localhost:8080/', // Use this for real currency service
  product_api_url: 'http://localhost:8080/productlookup/walmart', // Use this for real product service
  // currency_api_url: 'https://jsonplaceholder.typicode.com/posts' // Use this for fake service
};
