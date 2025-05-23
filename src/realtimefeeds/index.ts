import { Exchange, Filter } from '../types'
import {
  BinanceFuturesRealTimeFeed,
  BinanceJerseyRealTimeFeed,
  BinanceRealTimeFeed,
  BinanceUSRealTimeFeed,
  BinanceDeliveryRealTimeFeed
} from './binance'
import { BinanceDexRealTimeFeed } from './binancedex'
import { BitfinexRealTimeFeed } from './bitfinex'
import { BitflyerRealTimeFeed } from './bitflyer'
import { BitmexRealTimeFeed } from './bitmex'
import { BitstampRealTimeFeed } from './bitstamp'
import { BybitOptionsRealTimeDataFeed, BybitRealTimeDataFeed, BybitSpotRealTimeDataFeed } from './bybit'
import { CoinbaseRealTimeFeed } from './coinbase'
import { CryptofacilitiesRealTimeFeed } from './cryptofacilities'
import { DeribitRealTimeDataFeed } from './deribit'
import { FtxRealTimeFeed, FtxUSRealTimeFeed } from './ftx'
import { GeminiRealTimeFeed } from './gemini'
import { HitBtcRealTimeFeed } from './hitbtc'
import {
  HuobiDMRealTimeFeed,
  HuobiRealTimeFeed,
  HuobiDMSwapRealTimeFeed,
  HuobiDMLinearSwapRealTimeFeed,
  HuobiDMOptionsRealTimeFeed
} from './huobi'
import { KrakenRealTimeFeed } from './kraken'
import { OKCoinRealTimeFeed, OkexOptionsRealTimeFeed, OkexRealTimeFeed } from './okex'
import { RealTimeFeed } from './realtimefeed'
import { PhemexRealTimeFeed } from './phemex'
import { DeltaRealTimeFeed } from './delta'
import { GateIORealTimeFeed } from './gateio'
import { GateIOFuturesRealTimeFeed } from './gateiofutures'
import { PoloniexRealTimeFeed } from './poloniex'
import { CoinflexRealTimeFeed } from './coinflex'
import { BinanceOptionsRealTimeFeed } from './binanceoptions'
import { UpbitRealTimeFeed } from './upbit'
import { AscendexRealTimeFeed } from './ascendex'
import { DydxRealTimeFeed } from './dydx'
import { SerumRealTimeFeed } from './serum'
import { StarAtlasRealTimeFeed } from './staratlas'
import { MangoRealTimeFeed } from './mango'
import { CryptoComRealTimeFeed } from './cryptocom'
import { KucoinRealTimeFeed } from './kucoin'
import { BitnomialRealTimeFeed } from './bitnomial'
import { WooxRealTimeFeed } from './woox'
import { BlockchainComRealTimeFeed } from './blockchaincom'
import { BinanceEuropeanOptionsRealTimeFeed } from './binanceeuropeanoptions'
import { OkexSpreadsRealTimeFeed } from './okexspreads'
import { KucoinFuturesRealTimeFeed } from './kucoinfutures'
import { DydxV4RealTimeFeed } from './dydx_v4'
import { BitgetFuturesRealTimeFeed, BitgetRealTimeFeed } from './bitget'
import { CoinbaseInternationalRealTimeFeed } from './coinbaseinternational'
import { HyperliquidRealTimeFeed } from './hyperliquid'

export * from './realtimefeed'

const realTimeFeedsMap: {
  [key in Exchange]?: RealTimeFeed
} = {
  bitmex: BitmexRealTimeFeed,
  binance: BinanceRealTimeFeed,
  'binance-jersey': BinanceJerseyRealTimeFeed,
  'binance-us': BinanceUSRealTimeFeed,
  'binance-dex': BinanceDexRealTimeFeed,
  'binance-futures': BinanceFuturesRealTimeFeed,
  'binance-delivery': BinanceDeliveryRealTimeFeed,
  bitfinex: BitfinexRealTimeFeed,
  'bitfinex-derivatives': BitfinexRealTimeFeed,
  bitflyer: BitflyerRealTimeFeed,
  bitstamp: BitstampRealTimeFeed,
  coinbase: CoinbaseRealTimeFeed,
  cryptofacilities: CryptofacilitiesRealTimeFeed,
  deribit: DeribitRealTimeDataFeed,
  ftx: FtxRealTimeFeed,
  'ftx-us': FtxUSRealTimeFeed,
  gemini: GeminiRealTimeFeed,
  kraken: KrakenRealTimeFeed,
  okex: OkexRealTimeFeed,
  'okex-futures': OkexRealTimeFeed,
  'okex-swap': OkexRealTimeFeed,
  'okex-options': OkexOptionsRealTimeFeed,
  'huobi-dm': HuobiDMRealTimeFeed,
  'huobi-dm-swap': HuobiDMSwapRealTimeFeed,
  'huobi-dm-linear-swap': HuobiDMLinearSwapRealTimeFeed,
  huobi: HuobiRealTimeFeed,
  bybit: BybitRealTimeDataFeed,
  okcoin: OKCoinRealTimeFeed,
  hitbtc: HitBtcRealTimeFeed,
  phemex: PhemexRealTimeFeed,
  delta: DeltaRealTimeFeed,
  'gate-io': GateIORealTimeFeed,
  'gate-io-futures': GateIOFuturesRealTimeFeed,
  poloniex: PoloniexRealTimeFeed,
  coinflex: CoinflexRealTimeFeed,
  'binance-options': BinanceOptionsRealTimeFeed,
  upbit: UpbitRealTimeFeed,
  ascendex: AscendexRealTimeFeed,
  dydx: DydxRealTimeFeed,
  serum: SerumRealTimeFeed,
  'star-atlas': StarAtlasRealTimeFeed,
  'huobi-dm-options': HuobiDMOptionsRealTimeFeed,
  mango: MangoRealTimeFeed,
  'bybit-spot': BybitSpotRealTimeDataFeed,
  'bybit-options': BybitOptionsRealTimeDataFeed,
  'crypto-com': CryptoComRealTimeFeed,
  'crypto-com-derivatives': CryptoComRealTimeFeed,
  kucoin: KucoinRealTimeFeed,
  bitnomial: BitnomialRealTimeFeed,
  'woo-x': WooxRealTimeFeed,
  'blockchain-com': BlockchainComRealTimeFeed,
  'binance-european-options': BinanceEuropeanOptionsRealTimeFeed,
  'okex-spreads': OkexSpreadsRealTimeFeed,
  'kucoin-futures': KucoinFuturesRealTimeFeed,
  'dydx-v4': DydxV4RealTimeFeed,
  bitget: BitgetRealTimeFeed,
  'bitget-futures': BitgetFuturesRealTimeFeed,
  'coinbase-international': CoinbaseInternationalRealTimeFeed,
  hyperliquid: HyperliquidRealTimeFeed
}

export function getRealTimeFeedFactory(exchange: Exchange): RealTimeFeed {
  if (realTimeFeedsMap[exchange]) {
    return realTimeFeedsMap[exchange]!
  }

  throw new Error(`not supported exchange ${exchange}`)
}

export function createRealTimeFeed(
  exchange: Exchange,
  filters: Filter<string>[],
  timeoutIntervalMS: number | undefined,
  onError?: (error: Error) => void
) {
  const RealTimeFeedFactory = getRealTimeFeedFactory(exchange)

  return new RealTimeFeedFactory(exchange, filters, timeoutIntervalMS, onError)
}

export function setRealTimeFeedFactory(exchange: Exchange, realTimeFeed: RealTimeFeed) {
  realTimeFeedsMap[exchange] = realTimeFeed
}
