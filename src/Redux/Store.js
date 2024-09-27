import {configureStore} from "@reduxjs/toolkit"
import { tinycloreducer } from "./Reducer"
const store= configureStore({
    reducer:{
        tinyclodeatil : tinycloreducer
    }
})
export default store  