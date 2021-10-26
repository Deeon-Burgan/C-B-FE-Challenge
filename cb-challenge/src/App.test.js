import { render, screen, act, fireEvent } from '@testing-library/react';
import App from './App';
import { LandingPage } from './components/LandingPage';
import * as rtl from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import {shallow} from 'enzyme';


const data = {
              data: [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"market_cap":1585011099280,"market_cap_rank":1,"fully_diluted_valuation":1765372293108,"total_volume":41819240085,"high_24h":85490,"low_24h":82610,"price_change_24h":1246.38,"price_change_percentage_24h":1.50462,"market_cap_change_24h":18526575189,"market_cap_change_percentage_24h":1.18268,"circulating_supply":18854512.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":89569,"ath_change_percentage":-6.21695,"ath_date":"2021-10-20T14:54:17.702Z","atl":72.61,"atl_change_percentage":115588.27822,"atl_date":"2013-07-05T00:00:00.000Z","roi":null,"last_updated":"2021-10-26T02:14:43.868Z"}]
             };

const bigData = {
    data: [
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"dogecoin","symbol":"doge","name":"DogeCoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569},
        {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"total_volume":41819240085,"price_change_24h":1246.38,"ath":89569}
    ]
}

jest.mock('axios');
const mock = axios.get.mockImplementationOnce(() => Promise.resolve(data));
console.log(mock);
// jest.mock("axios", () => {
//     return {
//       get: jest.fn(() =>
//         Promise.resolve({
//           data: [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"market_cap":1585011099280,"market_cap_rank":1,"fully_diluted_valuation":1765372293108,"total_volume":41819240085,"high_24h":85490,"low_24h":82610,"price_change_24h":1246.38,"price_change_percentage_24h":1.50462,"market_cap_change_24h":18526575189,"market_cap_change_percentage_24h":1.18268,"circulating_supply":18854512.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":89569,"ath_change_percentage":-6.21695,"ath_date":"2021-10-20T14:54:17.702Z","atl":72.61,"atl_change_percentage":115588.27822,"atl_date":"2013-07-05T00:00:00.000Z","roi":null,"last_updated":"2021-10-26T02:14:43.868Z"}]
//         }
//         )
//       )};
//   });

test('renders landing page document', () => {
    render(<App />);
    const linkElement = screen.getByText('Top 100 Cryptos');
    expect(linkElement).toBeInTheDocument();
});

test('axios call is made to fetch data', () => {
    render(<App/>);
    // console.log(axios.get);
    expect(axios.get).toHaveBeenLastCalledWith('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud');
});

test('displays a message if no data is found', () => {
    render(<App/>)
    const linkElement = screen.getByText('Unfortunately I have received no data, please try again!');
    expect(linkElement).toBeInTheDocument();
});

test('can input text to search for specific coins', async () => {
    axios.get.mockResolvedValueOnce(bigData);
    await act(async () => render(<App/>));
    userEvent.type(screen.getByPlaceholderText('Search'), 'doge');
    const elements = screen.getAllByTestId('testing-row');
    expect(elements.length).toBeLessThanOrEqual(1);
});

test('should render data entry if data is not null', async () => {
    axios.get.mockResolvedValueOnce({ data: [{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":84083,"market_cap":1585011099280,"market_cap_rank":1,"fully_diluted_valuation":1765372293108,"total_volume":41819240085,"high_24h":85490,"low_24h":82610,"price_change_24h":1246.38,"price_change_percentage_24h":1.50462,"market_cap_change_24h":18526575189,"market_cap_change_percentage_24h":1.18268,"circulating_supply":18854512.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":89569,"ath_change_percentage":-6.21695,"ath_date":"2021-10-20T14:54:17.702Z","atl":72.61,"atl_change_percentage":115588.27822,"atl_date":"2013-07-05T00:00:00.000Z","roi":null,"last_updated":"2021-10-26T02:14:43.868Z"}]})
    await act(async () => render(<App/>));
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
});

test('should paginate if more than 10 entries exist', async () => {
    axios.get.mockResolvedValueOnce(bigData);
    await act(async () => render(<App/>));
    const elements = screen.getAllByTestId('pagination-button');
    expect(elements.length).toBeGreaterThan(1);
});

test('should change pages when clicking the buttons', async () => {
    axios.get.mockResolvedValueOnce(bigData);
    await act(async () => render(<App/>));
    const elements = screen.getAllByTestId('pagination-button');
    const inputElement = elements[1];
    fireEvent.click(inputElement);
    const target = screen.getByText('11');
    expect(target).toBeInTheDocument();
})