import React from "react";
import LiquidEther from "./LiquidEther";

const withLiquidEtherBackground = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => (
    <div style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden" }}>
      <LiquidEther style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }} />
      <div style={{ position: "relative", overflowY: 'scroll', height: '100vh' }}>
        <WrappedComponent {...props} />
      </div>
    </div>
  );
};

export default withLiquidEtherBackground;
