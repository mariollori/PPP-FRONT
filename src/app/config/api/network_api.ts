import { routesBackendTables } from '../client/client_tables';
import { environment } from '../../../environments/environment';

const client = routesBackendTables;
const env = environment.apiUrl;

export const routesAccess = {
  // LOGIN
  login: `${env}${client.authApi}/sign-in`,

  // USER
  userGetAll: `${env}${client.userApi}/get-all`,
  registerUser: `${env}${client.userApi}/register`,

  // PLAN
  basesPPPGet: `${env}${client.planApi}/get-bases-ppp`,
  plantGetAll: `${env}${client.planApi}/get-all`,
  typeDocumentGetAll: `${env}${client.planApi}/get-all-types-documents`,
  createPlan: `${env}${client.planApi}/create-plan-ppp`,
  createAreaPlan: `${env}${client.planApi}/create-area-plan`,
  createQuestion: `${env}${client.planApi}/create-question-evaluation`,
  createDocumentPPP: `${env}${client.planApi}/create-document-plan`,
  getStudents: `${env}${client.planStudent}/get-students-by-plan-ppp`,

  // PPP
  postCreateEvaluationPPP: `${env}${client.ppp}/create-evaluation`
};
