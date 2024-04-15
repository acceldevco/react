import { useState } from "react";

import jmespath from "jmespath";

export const Controller = {
  controllerPosition: async (e, settest, test) => {
    settest(test + 1);
    console
      .log
      //       jmespath.search(
      //         store.getState().page["home"],
      //         //       `to_array(@)[?gridDrag].gridDrag.grid.${
      //         //         e.target?.dataset.datama.split("_")[0]
      //         //       }|{${
      //         //         e.target?.dataset.datama.split("_")[0]
      //         //       }:to_array([0])[?slices].slices|{slices:{${
      //         //         e.target?.dataset.datama.split("_")[1]
      //         //       }:to_array([0])[?${e.target?.dataset.datama.split("_")[1]}].${
      //         //         e.target?.dataset.datama.split("_")[1]
      //         //       }|{blockDrag:to_array([0])[?blockDrag].blockDrag|[0]},
      //         //     }
      //         //   }
      //         // }`
      //         `[@.gridDrag.grid][?row0].row0|{row0:{slices:[[0].slices][?sli23].sli213|{sli213:[[0].blockDrag][?blockDrag]|{blockDrag:[0]}}}}
      // `
      //       )
      ();

    const state = {
      ...store.getState().page["home"].gridDrag.grid,
      [e.target?.dataset.datama.split("_")[0]]: e.target?.dataset.datama.split(
        "_"
      )[0]
        ? {
            ...store.getState().page["home"].gridDrag.grid[
              e.target?.dataset.datama.split("_")[0]
            ],
            slices: e.target?.dataset.datama.split("_")[1]
              ? {
                  [e.target?.dataset.datama.split("_")[1]]:
                    e.target?.dataset.datama.split("_")[1]
                      ? {
                          ...store.getState().page["home"].gridDrag.grid[
                            e.target?.dataset.datama.split("_")[0]
                          ].slices[e.target?.dataset.datama.split("_")[1]],

                          blockDrag: e.target?.dataset.datama.split("_")[2]
                            ? {
                                [e.target?.dataset.datama.split("_")[2]]: {
                                  ...store.getState().page["home"].gridDrag
                                    .grid[
                                    e.target?.dataset.datama.split("_")[0]
                                  ].slices[
                                    e.target?.dataset.datama.split("_")[1]
                                  ].blockDrag[
                                    e.target?.dataset.datama.split("_")[2]
                                  ],
                                },
                              }
                            : {},
                        }
                      : null,
                }
              : null,
          }
        : null,
    };

    console.log(
      state["row0"],
      e.target?.dataset.datama,

      store.getState().page["home"],
      e.target?.dataset.datama,
      jmespath.search(
        store.getState().page["home"],

        // `{gridDrag:{grid:{${
        //   e.target?.dataset.datama.split("_")[0]
        // }:{margin:@.gridDrag.grid.${
        //   e.target?.dataset.datama.split("_")[0]
        // }.margin,padding:to_array(@)[?gridDrag].gridDrag.grid.${
        //   e.target?.dataset.datama.split("_")[0]
        // }.padding | [0],slices:{${`sli213:to_array(@)[?gridDrag].gridDrag.grid.${
        //   e.target?.dataset.datama.split("_")[0]
        // }.slices.sli213 | [0]`}}}}}}`
        // `{gridDrag:{grid:{row0:to_array(@)[?gridDrag].gridDrag | to_array([0].grid)[?row0].row0 | [0]}}}`
        // `to_array(gridDrag.grid)[?row0].row0 | {row0:{slices:to_array([0].slices)[?sli233]|{sli233:{blockDrag:[0].sli233.blockDrag}}} }`
        `to_array(@)[?gridDrag].gridDrag.grid.row0|{row0:to_array([0])[?slices].slices|{slices:{sli213:to_array([0])[?sli213].sli213|{blockDrag:to_array([0])[?blockDrag].blockDrag|[0]}}}}`
      )
    );

    console.log("data", e.target?.dataset.datama.split("_"), e.target?.dataset);

    const rowValues = jmespath.search(
      store.getState().page["home"],

      `to_array(@)[?gridDrag].gridDrag.grid[?row0].row0.slices[?sli213].sli213 | [0]`
    );

    console.log(rowValues);
  },
};
export const posi = {
  top: "",
  left: "",
  right: "",
  down: "",
};
var datas = {};

export var controller = {
  max:{
    w:"",
    h:""
  },
  padding: {
    t: 0,
    d: 0,
    l: 0,
    r: 0,
  },
  margin: {
    t: 0,
    d: 0,
    l: 0,
    r: 0,
  },
  color: { type: "" },
  bg: { type: "" },
  rou: {
    size: "",
  },
  display: {
    flex: false,
    dir: "",
    jus: "",
    ite: "",
    gap: "",
  }
};

export var Pageadmin = {
  // avatar: "",
  // nameAdmin: "",
  // inbox: "",
  // alert: "",
  // Post: {
  //   input: [
  //     { placeholder: "comment", name: "comment", type: "text" },
  //     { placeholder: "productid", name: "productid", type: "number" },
  //   ],
  //   name: "posts",
  //   fetchadd: "",
  //   fetchdelete: "",
  //   fetchedit: "",
  //   button: "addpost",
  // },
  // Products: {
  //   tabel: [{ th: "image" }, { th: "name" }, { th: "price" }, { th: "edit" }],
  //   input: [
  //     { placeholder: "images", name: "images", type: "file" },
  //     { placeholder: "nameProducts", name: "nameProducts", type: "text" },
  //     { placeholder: "priceProducts", name: "priceProducts", type: "number" },
  //     {
  //       placeholder: "regpriceProducts",
  //       name: "regpriceProducts",
  //       type: "number",
  //     },
  //     {
  //       placeholder: "dateregpriceProducts",
  //       name: "dateregpriceProducts",
  //       type: "date",
  //     },
  //   ],
  //   name: "products",
  //   fetchadd: "",
  //   fetchdelete: "",
  //   fetchedit: "",
  //   fetchget: "/product",
  //   button: "addproducts",
  // },
  // Users: {
  //   input: [
  //     { placeholder: "name", name: "name", type: "text" },
  //     { placeholder: "email", name: "email", type: "email" },
  //     { placeholder: "password", name: "password", type: "password" },
  //   ],
  //   name: "users",
  //   fetchadd: "",
  //   fetchdelete: "",
  //   fetchedit: "",
  //   button: "addusers",
  // },
  // category: {
  //   input: [
  //     { placeholder: "name", name: "name", type: "text" },
  //     { placeholder: "link", name: "link", type: "text" },
  //     { placeholder: "parent", name: "parent", type: "text" },
  //   ],
  //   name: "category",
  //   fetchadd: "",
  //   fetchdelete: "",
  //   fetchedit: "",
  //   button: "addcategory",
  // },
  // register: {
  //   input: [
  //     { placeholder: "firstname", name: "firstname", type: "text" },
  //     { placeholder: "lastname", name: "lastname", type: "text" },
  //     { placeholder: "email", name: "email", type: "email" },
  //     { placeholder: "password", name: "password", type: "password" },
  //   ],
  // },
  // login: {
  //   input: [
  //     { placeholder: "email", name: "email", type: "email" },
  //     { placeholder: "password", name: "password", type: "password" },
  //   ],
  // },
  controllerSetting: (te, props) => {
    // console.log(te, props);

    // return ""
    return te != ""
      ? `${
          //block
          props?.[te]?.display.flex
            ? `flex justify-${props?.[te]?.display.jus} gap-[${props?.[te]?.display.gap}px] flex-${props?.[te]?.display.dir} items-${props?.[te]?.display.ite}`
            : ""
        } p-[${props?.[te]?.padding.t}px_${props?.[te]?.padding.r}px_${
          props?.[te]?.padding.d
        }px_${props?.[te]?.padding.l}px] m-[${props?.[te]?.margin.t}px_${
          props?.[te]?.margin.r
        }px_${props?.[te]?.margin.d}px_${props?.[te]?.margin.l}px] bg-[${
          props?.[te]?.bg.type
        }] text-[${props?.[te]?.color.type}] rounded-[${
          props?.[te]?.color.type
        }px] max-w-[${props?.[te].max?.w}px] max-h-[${props?.[te].max?.h}px] bg-[${props?.[te].bg?.type}] rounded-[${props?.[te].rou.size}px]`
      : `${
          //slid
          props?.display.flex
            ? `flex justify-${props?.display.jus} gap-[${props?.display.gap}px] flex-${props?.display.dir} items-${props?.display.ite}`
            : ""
        } p-[${props?.padding.t}px_${props?.padding.r}px_${
          props?.padding.d
        }px_${props?.padding.l}px] m-[${props?.margin.t}px_${
          props?.margin.r
        }px_${props?.margin.d}px_${props?.margin.l}px] bg-[${
          props?.bg.type
        }] text-[${props?.color.type}] rounded-[${props?.color.type}px] bg-[${
          props?.bg?.type
        }] max-w-[${props?.max?.w}px] max-h-[${props?.max?.h}px] rounded-[${props?.rou.size}px]`;
  },
};
