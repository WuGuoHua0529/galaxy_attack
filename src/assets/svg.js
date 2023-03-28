import { useQuasar } from 'quasar'

class SvgLoader {
    constructor () {
        this.icons = {}
        const files = import.meta.globEager('/public/statics/svg/*.svg')

        for (const key in files) {
            const [name,] = files[key].default.split('/').pop().split('.')
            this.icons[name] = `svguse:/statics/svg/${name}.svg#${name}`
        }
    }

    register () {
        const $q = useQuasar()
        $q.iconMapFn = (iconName) => {
            const icon = this.icons[iconName]
            if (icon !== void 0) {
                return { icon }
            }
        }
    }
}

export default new SvgLoader()
