"use client";

import { deleteBooking } from "@/lib/actions";
import ReservationCard from "./ReservationCard";

import { useOptimistic } from "react";

function ReservationList({ bookings }: { bookings: any }) {
  const [optimisticBookings, optimisticDelete] =
    useOptimistic(bookings, (curBookings, bookingId) => {
      return curBookings.filter(
        (booking: any) => booking.id !== bookingId
      );
    });

  async function handleDelete(bookingId: number) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking: any) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
