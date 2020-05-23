import resourceInfo from '../static/resourceInfo'

const resourceCount = {}

Object.entries(resourceInfo).forEach(([key, val]) =>{
    resourceCount[key] = 0; // = val.startingCount;
})

export default resourceCount;