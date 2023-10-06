import config from '../config';

export const apiEndPoint = {
  ORGANIZARION: `${config.apiUrl}/organization`,
  DEPARTMENT: `${config.apiUrl}/department`,
  DEPARTMENT_SEAFRCH: `${config.apiUrl}/department/search`,
  PRODUCT: `${config.apiUrl}/product`,
  PRODUCT_SEARCH: `${config.apiUrl}/product/search`,
  PRODUCT_ENV: `${config.apiUrl}/product-env`,
  INFRA_DISCOVERY_API: `${config.apiUrl}/infra-discovery/organization/1/aws`,
  PRODUCT_ENV_GET: `${config.apiUrl}/product-enclave`,
  MODULE: `${config.apiUrl}/module`,
  MODULE_SEARCH: `${config.apiUrl}/module/search`,
  BUSINSS_ELEMENT: `${config.apiUrl}/business-element`,
  BUSINSS_ELEMENT_SEARCH: `${config.apiUrl}/business-element/search`,
  BUDGET: `${config.apiUrl}/budget`,
  BUDGET_SEAFRCH: `${config.apiUrl}/budget/search`,
  DB_CATEGORY: `${config.apiUrl}/db-category`,
  DB_CATEGORY_SEARCH: `${config.apiUrl}/db-category/search`,
  SECURITY_ORGANIZARION: `${config.apiSyUrl}/organization/add`,
  SECURITY_ORGANIZARION_SEARCH: `${config.apiSyUrl}/organization/getAllOrganizations`,
  LANDING_ZONE: `${config.apiUrl}/landingzone`,
  LANDING_ZONE_SEARCH: `${config.apiUrl}/landingzone/search`,
  USER: `${config.apiSyUrl}/organization/add`,
  USER_SEARCH: `${config.apiSyUrl}/users/search`,
  SECURITY_ORGANIZARION_PUSH_CMDB: `${config.apiSyUrl}/organization/push-to-cmdb`,
  PRODUCT_ENCLAVE: `${config.apiUrl}/product-env`,
  CLOUD_ELEMENT: `${config.apiUrl}/cloud-element/search`,
  CONFIG_SUMMERY_DISCOVERY: `${config.apiUrl}/cloud-element-summary`,
  COST_DATA_GENERATOR: `${config.apiUrl}/cloud-element/generate/cost-data`,
  SLA_DATA_GENERATOR: `${config.apiUrl}/cloud-element/generate/sla-data`,
  GET_AUTO_SSOCIATE:`${config.apiUrl}/cloud-element/auto-associate/org`,
  GET_AUTO_SSOCIATE_LAMBDA:`${config.apiUrl}/cloud-element/auto-associate-lambda`,
  GET_AUTO_SSOCIATE_S3:`${config.apiUrl}/cloud-element/auto-associate-s3`,
}