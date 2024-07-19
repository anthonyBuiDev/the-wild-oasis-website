"use client";

import { createContext, useContext, useState } from "react";

// Provide a default value here
const ReservationContext = createContext({});

const initialState = { from: undefined, to: undefined };

function ReservationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider
      value={{ range, setRange, resetRange }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
