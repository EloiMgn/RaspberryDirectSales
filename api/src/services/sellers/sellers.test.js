import {
  sellers,
  seller,
  createSeller,
  updateSeller,
  deleteSeller,
} from './sellers';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sellers', () => {
  scenario('returns all sellers', async (scenario) => {
    const result = await sellers();

    expect(result.length).toEqual(Object.keys(scenario.seller).length);
  });

  scenario('returns a single seller', async (scenario) => {
    const result = await seller({ id: scenario.seller.one.id });

    expect(result).toEqual(scenario.seller.one);
  });

  scenario('creates a seller', async () => {
    const result = await createSeller({
      input: { name: 'String', phone: 'String', email: 'String' },
    });

    expect(result.name).toEqual('String');
    expect(result.phone).toEqual('String');
    expect(result.email).toEqual('String');
  });

  scenario('updates a seller', async (scenario) => {
    const original = await seller({ id: scenario.seller.one.id });
    const result = await updateSeller({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a seller', async (scenario) => {
    const original = await deleteSeller({ id: scenario.seller.one.id });
    const result = await seller({ id: original.id });

    expect(result).toEqual(null);
  });
});
