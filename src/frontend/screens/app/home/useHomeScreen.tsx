import {useEffect, useState} from 'react';
import {SUCCESS} from '../../../../constants/ResultsConstants';
import getBiggestGainersUC from '../../../../domain/example-uc/getBiggestGainersUC';

const useHomeScreen = () => {
  /******************/
  /***** STATES *****/
  /******************/
  
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [biggestGainers, setBiggestGainers] = useState<string>('');

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  /**
   *
   */
  useEffect(() => {
    const result = getBiggestGainersUC();

    if (result.status == SUCCESS) {
      setBiggestGainers(result.data);
    } else {
      setBiggestGainers('Failed to get biggest gainers');
    }

    setIsLoading(false);
  }, []);

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {isLoading, biggestGainers};
};

export default useHomeScreen;
