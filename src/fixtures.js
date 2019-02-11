import { createSpec, faker } from '@helpscout/helix';

faker.locale = 'ru';

const CameraSpec = createSpec({
    id: faker.random.uuid(),
    name: faker.random.word(),
    type: faker.hacker.abbreviation(),
    address: faker.address.streetAddress(),
    coords: [faker.address.latitude(), faker.address.longitude()],
    link: faker.internet.url(),

});

export const cameras = CameraSpec.generate(30);
export const ymapsApiKey = 'fa9dad2c-e21c-4e88-a823-7f016a86f0be';