import {SUCCESS, ERROR} from '../../constants/ResultsConstants';
import {Result} from '../../constants/typeAliases';
import {EXAMPLE_ERROR_MESSAGE} from '../../constants/Strings';
import printDevLogs from '../printDevLogs';
import doGetBiggestGainers from '../../backend/stock-api/doGetBiggestGainers';
/**
 * 
 * @returns 
 */
const getBiggestGainersUC = (): Result => {
  try {
    // something
    const biggestGainers = doGetBiggestGainers()

    return {status: SUCCESS, data: biggestGainers, message: ''};
  } catch (e: any) {
    return _getErrorResponse(e);
  }
};

/**
 * 
 * @param error 
 * @returns 
 */
const _getErrorResponse = (error: any): Result => {
  if (__DEV__) {
    printDevLogs(
      'domain/available-prizes-screen-uc/getAvailablePrizesUC.ts',
      'getAvailablePrizesUC',
      `${error}`,
    );
  }

  return {status: ERROR, data: [], message: EXAMPLE_ERROR_MESSAGE};
};

export default getBiggestGainersUC;