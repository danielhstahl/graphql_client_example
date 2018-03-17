/**
 * Defines the environment.  Must have this
 * in each app, any only one (I think)
 */
import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime'
  
const fetchQuery=(operation, variables)=>fetch(
    '/graphql', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query: operation.text,
        variables,
        }),
    }).then(response =>response.json())

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),  
})

export default environment;