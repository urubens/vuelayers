<script>
  /**
   * @module zoomify-source/source
   */
  import ZoomifySource from 'ol/source/zoomify'
  import tileSource from '../../mixin/tile-source'

  const props = {
    tierSizeCalculation: {
      type: String,
    },
    extent: {
      type: Array,
    },
    size: {
      type: Array,
    },
  }

  const methods = {
    createSource () {
      return new ZoomifySource({
        attributions: this.attributions,
        cacheSize: this.cacheSize,
        crossOrigin: this.crossOrigin,
        projection: this.projection,
        reprojectionErrorThreshold: this.reprojectionErrorThreshold,
        url: this.urlTmpl,
        tierSizeCalculation: this.tierSizeCalculation,
        size: this.size,
        extent: this.extent,
        transition: this.transition,
        tileSize: this.tileSize[0],
      })
    },
  }

  export default {
    name: 'vl-source-zoomify',
    mixins: [tileSource],
    props,
    methods,
  }
</script>
