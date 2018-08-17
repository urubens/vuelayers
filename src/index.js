/**
 * This file is a part of vuelayers package.
 * @package vuelayers
 * @author Vladimir Vershinin
 * @license MIT
 */
import BingMapsSource from './component/bing-maps-source'
import CircleGeom from './component/circle-geom'
import CircleStyle from './component/circle-style'
import ClusterSource from './component/cluster-source'
import DrawInteraction from './component/draw-interaction'
import Feature from './component/feature'
import FillStyle from './component/fill-style'
import Geoloc from './component/geoloc'
import IconStyle from './component/icon-style'
import ImageLayer from './component/image-layer'
import ImageStaticSource from './component/image-static-source'
import LineStringGeom from './component/line-string-geom'
import Map from './component/map'
import MapboxSource from './component/mapbox-source'
import ModifyInteraction from './component/modify-interaction'
import MultiLineStringGeom from './component/multi-line-string-geom'
import MultiPointGeom from './component/multi-point-geom'
import MultiPolygonGeom from './component/multi-polygon-geom'
import OsmSource from './component/osm-source'
import Overlay from './component/overlay'
import PointGeom from './component/point-geom'
import PolygonGeom from './component/polygon-geom'
import RegShapeStyle from './component/reg-shape-style'
import SelectInteraction from './component/select-interaction'
import SnapInteraction from './component/snap-interaction'
import SputnikSource from './component/sputnik-source'
import StrokeStyle from './component/stroke-style'
import StyleBox from './component/style-box'
import StyleFunc from './component/style-func'
import TextStyle from './component/text-style'
import TileLayer from './component/tile-layer'
import VectorLayer from './component/vector-layer'
import VectorSource from './component/vector-source'
import VectorTileLayer from './component/vector-tile-layer'
import VectorTileSource from './component/vector-tile-source'
import WmsSource from './component/wms-source'
import WmtsSource from './component/wmts-source'
import XyzSource from './component/xyz-source'
import ZoomifySource from './component/zoomify-source'
// #if IS_STANDALONE
import * as mixin from './mixin'
import * as olExt from './ol-ext'
import * as rxExt from './rx-ext'
// #endif
import './sass/main.sass'

/**
 * @const {string} VueLayers version.
 */
const VERSION = 'C_PKG_VERSION'
/**
 * Registers all VueLayers components.
 * @param {Vue|VueConstructor} Vue
 * @param {VueLayersOptions} [options]
 */
function plugin (Vue, options = {}) {
  // install components
  Vue.use(BingMapsSource, options)
  Vue.use(CircleGeom, options)
  Vue.use(CircleStyle, options)
  Vue.use(ClusterSource, options)
  Vue.use(DrawInteraction, options)
  Vue.use(Feature, options)
  Vue.use(FillStyle, options)
  Vue.use(Geoloc, options)
  Vue.use(IconStyle, options)
  Vue.use(ImageLayer, options)
  Vue.use(ImageStaticSource, options)
  Vue.use(LineStringGeom, options)
  Vue.use(Map, options)
  Vue.use(MapboxSource, options)
  Vue.use(ModifyInteraction, options)
  Vue.use(MultiLineStringGeom, options)
  Vue.use(MultiPointGeom, options)
  Vue.use(MultiPolygonGeom, options)
  Vue.use(OsmSource, options)
  Vue.use(Overlay, options)
  Vue.use(PointGeom, options)
  Vue.use(PolygonGeom, options)
  Vue.use(RegShapeStyle, options)
  Vue.use(SelectInteraction, options)
  Vue.use(SnapInteraction, options)
  Vue.use(SputnikSource, options)
  Vue.use(StrokeStyle, options)
  Vue.use(StyleBox, options)
  Vue.use(StyleFunc, options)
  Vue.use(TextStyle, options)
  Vue.use(TileLayer, options)
  Vue.use(VectorLayer, options)
  Vue.use(VectorSource, options)
  Vue.use(VectorTileLayer, options)
  Vue.use(VectorTileSource, options)
  Vue.use(WmsSource, options)
  Vue.use(WmtsSource, options)
  Vue.use(XyzSource, options)
  Vue.use(ZoomifySource, options)
}

export default plugin
/* eslint-disable indent */
export {
  VERSION,
  plugin as install,
  // components
  BingMapsSource,
  CircleGeom,
  CircleStyle,
  ClusterSource,
  DrawInteraction,
  Feature,
  FillStyle,
  Geoloc,
  IconStyle,
  ImageLayer,
  ImageStaticSource,
  LineStringGeom,
  Map,
  MapboxSource,
  ModifyInteraction,
  MultiLineStringGeom,
  MultiPointGeom,
  MultiPolygonGeom,
  OsmSource,
  Overlay,
  PointGeom,
  PolygonGeom,
  RegShapeStyle,
  SelectInteraction,
  SnapInteraction,
  SputnikSource,
  StrokeStyle,
  StyleBox,
  StyleFunc,
  TextStyle,
  TileLayer,
  VectorLayer,
  VectorSource,
  VectorTileLayer,
  VectorTileSource,
  WmsSource,
  WmtsSource,
  XyzSource,
  ZoomifySource,
// #if IS_STANDALONE
  mixin,
  olExt,
  rxExt,
// #endif
}

/**
 * @typedef {Object} VueLayersOptions
 * @property {string} [dataProjection] Projection for all properties, events and other plain values.
 */
