/* global localStorage */

import React from "react";
//const AppMarketIcon = React.lazy(() => import("./AppMarketIcon"));
//const NewsMuzzlerIcon = React.lazy(() => import("./NewsMuzzlerIcon"));

//import AppMarketIcon from "./AppMarketIcon";
//import NewsMuzzlerIcon from "./NewsMuzzlerIcon";

/*
const LazyComp1 = React.lazy(() => import('./Comp1'));
const LazyComp2 = React.lazy(() => import('./Comp2'));
const LazyComp3 = React.lazy(() => import('./Comp3'));

const lazyMap = {
 LazyComp1,
 LazyComp2,
 LazyComp3
};

function DynamicModal(props) {
   const LazyComponent = lazyMap[props.lazyKey]           
          return (

            <React.Suspense fallback={<SpinLoadingModal />}>
              <div>
              <LazyComponent/>
              </div>
            </React.Suspense>
          );
        }
*/

const importComponent = name => {
  console.log("IMPORT ", name);
  return React.lazy(() =>
    import(`${name}`).catch(err => {
      console.log("ERR ", err);
    }),
  );
};

export const RecentApps = () => {
  /*
  let _defaultSchema = JSON.parse(localStorage.getItem("builderDefaultSchema"));

  localStorage.setItem(
    "builderDefaultSchemaId",
    result.data.createDataModels.uuid
  );
*/
  let recentApps = JSON.parse(localStorage.getItem("PrifinaRecentApps"));
  if (recentApps === null) {
    recentApps = ["./AppMarketIcon", "./NewsMuzzlerIcon"];
    localStorage.setItem("PrifinaRecentApps", JSON.stringify(recentApps));
  }
  //console.log(recentApps);
  //const recentApps = ["./AppMarketIcon", "./NewsMuzzlerIcon"];
  //localStorage.setItem("PrifinaRecentApps", JSON.stringify(recentApps));
  //const recentApps = JSON.parse(localStorage.getItem("PrifinaRecentApps"));
  const apps = recentApps.map(app => {
    return importComponent(app);
  });

  //const apps = [AppMarketIcon, NewsMuzzlerIcon];

  return (
    <React.Suspense fallback={"Loading ..."}>
      {apps.map((Component, i) => {
        return <Component key={"app-" + i} />;
      })}
    </React.Suspense>
  );
};
