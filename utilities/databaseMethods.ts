import { API } from 'aws-amplify';
import { deleteSong } from '../src/graphql/mutations';

async function deleteRecord({ record }: any) {
  try {
    await API.graphql({
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      query: deleteSong,
      variables: {
        input: { id: record.id }
      }
    });

    window.location.href = '/';
  } catch (e: any) {
    console.error(...e.errors);
    throw new Error(e.errors[0].message);
  }
}