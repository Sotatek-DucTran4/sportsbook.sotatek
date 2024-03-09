import { useSelector } from 'react-redux';
import { useRef, useEffect, useCallback } from 'react';

import { useRouter } from 'src/routes/hooks';

import { selectCurrentUser } from 'src/redux/slice/userSlice';

const BetbyFrame = () => {
  const betByRef = useRef(null);
  const user = useSelector(selectCurrentUser);

  const router = useRouter();

  const onLogin = useCallback(() => {
    router.push('/login');
  }, [router]);

  const onTokenExpired = () => {};
  const onRouteChange = () => {};
  const onRegister = () => {};
  const onSessionRefresh = () => {};
  const onBetSlipStateChange = () => {};

  useEffect(() => {
    if (!user || !user.token || !user.betbyBrandId) {
      router.push("/login");
      return () => ({});
    }

    const { BTRenderer } = window; // Assuming BTRenderer is available globally

    const btr = new BTRenderer().initialize({
      brand_id: user.betbyBrandId ? user.betbyBrandId : '',
      token: user.sportsbookToken ? user.sportsbookToken : null,
      onTokenExpired,
      themeName: user.themeName ? user.themeName : 'default',
      lang: user.lang ? user.lang : 'en',
      target: betByRef.current,
      betSlipOffsetTop: 0,
      betslipZIndex: 999,
      onRouteChange,
      onLogin,
      onRegister,
      onSessionRefresh,
      onBetSlipStateChange,
    });

    return () => btr.kill();
  }, [onLogin, user, router]);

  return <div ref={betByRef} />;
};

export default BetbyFrame;
