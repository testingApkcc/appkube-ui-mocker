import React from "react";
// import DaTaSetup from "../Pages/DataView/DataSetup";
import DataTree from "../Pages/DataTree/DataTree";
import Organization from "../Pages/SetupData/Organization";
import Department from "../Pages/SetupData/Department";
import Product from "../Pages/SetupData/Product";
import ProductEnv from "../Pages/SetupData/ProductEnv";
import Module from "../Pages/SetupData/Module";
import BusinessElement from "../Pages/SetupData/BusinessElement";
import Budget from "../Pages/SetupData/Budget";
import DbCategory from "../Pages/SetupData/DbCategory";
import SecurityOrganization from "../Pages/Security/SecurityOrganization";
import Landingzone from '../Pages/SetupData/Landingzone';
import User from '../Pages/Security/User';
import ProductEnclave from '../Pages/SetupData/ProductEnclave';
import CloudElement from '../Pages/SetupData/CloudElement';
import ConfigSummaryDiscovery from '../Pages/SetupData/ConfigSummaryDiscovery';
export const AppControler = ({ tabpage }) => {
    let tab_coponent = tabpage.name;

    const tabbComponents = () => {
        switch (tab_coponent) {
            // case "Data Setup":
            //     return (
            //         <DaTaSetup />
            //     );
            case "Data Tree":
                return (
                    <DataTree />
                );
            case "Organization":
                return (
                    <Organization />
                );
            case "Department":
                return (
                    <Department />
                );
            case "Product":
                return (
                    <Product />
                );
            case "Product Env":
                return (
                    <ProductEnv />
                );
            case "Module":
                return (
                    <Module />
                );
            case "Business Element":
                return (
                    <BusinessElement />
                );
            case "Budget":
                return (
                    <Budget />
                );
            case "DB Category":
                return (
                    <DbCategory />
                );
            case "Landingzone":
                return (
                    <Landingzone />
                );
            case "Security Organization":
                return (
                    <SecurityOrganization />
                );
            case "User":
                return (
                    <User />
                );
            case "Product Enclave":
                return (
                    <ProductEnclave />
                );
            case "Cloud Element":
                return (
                    <CloudElement />
                );
            case "App Config":
                return (
                    <ConfigSummaryDiscovery />
                );


        }
    }

    return (
        <>
            {tabbComponents()}
        </>
    )
}