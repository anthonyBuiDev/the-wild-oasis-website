import { Database } from "./database.types";

export type BookingTypes =Database["public"]["Tables"]["bookings"]["Row"]
export type GuestTypes =Database["public"]["Tables"]["guests"]["Row"]

export type CabinTypes =Database["public"]["Tables"]["cabins"]["Row"]