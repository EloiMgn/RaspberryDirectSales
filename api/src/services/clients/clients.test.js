import {
  clients,
  client,
  createClient,
  updateClient,
  deleteClient,
} from './clients';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clients', () => {
  scenario('returns all clients', async (scenario) => {
    const result = await clients();

    expect(result.length).toEqual(Object.keys(scenario.client).length);
  });

  scenario('returns a single client', async (scenario) => {
    const result = await client({ id: scenario.client.one.id });

    expect(result).toEqual(scenario.client.one);
  });

  scenario('creates a client', async () => {
    const result = await createClient({
      input: {
        title: 'String',
        contact: 'String',
        phone: 'String',
        email: 'String',
        type: 'String',
        sector: 'String',
        adress: 'String',
      },
    });

    expect(result.title).toEqual('String');
    expect(result.contact).toEqual('String');
    expect(result.phone).toEqual('String');
    expect(result.email).toEqual('String');
    expect(result.type).toEqual('String');
    expect(result.sector).toEqual('String');
    expect(result.adress).toEqual('String');
  });

  scenario('updates a client', async (scenario) => {
    const original = await client({ id: scenario.client.one.id });
    const result = await updateClient({
      id: original.id,
      input: { title: 'String2' },
    });

    expect(result.title).toEqual('String2');
  });

  scenario('deletes a client', async (scenario) => {
    const original = await deleteClient({ id: scenario.client.one.id });
    const result = await client({ id: original.id });

    expect(result).toEqual(null);
  });
});
