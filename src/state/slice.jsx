import { v4 as uuid } from "uuid";
// import store, { settingMenusession } from "./ReduxState";
// import Comforresize from "../Page/buildPage/Comforresize";
import { controller } from "./control";
var slice = {
  "3slice": {
    
    type: "3slice",
    class: "bg-red-500",
    gap: 10,
    ...controller,
    slices: {
      sli213: {
        type: "sli213",
 ...controller,

        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli223: {
        
        type: "sli223",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli233: {
        
        type: "sli233",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
    },
  },
  "4slice": {
    
    type: "4slice",
    class: "bg-red-500",
    gap: 10,
    ...controller,
    slices: {
      sli114: {
        
        type: "sli114",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli224: {
        
        type: "sli224",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli334: {
        
        type: "sli334",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli444: {
        
        type: "sli444",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
    },
  },
  "2slice": {
    
    type: "2slice",
    class: "bg-red-500",
    gap: 10,
    ...controller,
    slices: {
      sli112: {
        
        type: "sli112",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli224: {
        
        type: "sli224",
 ...controller,
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
    },
  },
  "5slice": {
    
    type: "5slice",
    class: "bg-red-500",
    gap: 10,
    ...controller,
    slices: {
      sli115: {
        
        type: "sli115",
        class: {
          ...controller
        },
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli225: {
        
        type: "sli225",
        class: {
          ...controller
        },
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli335: {
        
        type: "sli335",
        class: {
          ...controller
        },
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli445: {
        
        type: "sli445",
        class: {
          ...controller
        },
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
      sli555: {
        
        type: "sli555",
        class: {
          ...controller
        },
        blockDrag: {},
        ...controller,
        font: "",
        flexGrow: 1,
      },
    },
  },
};
export default slice;
