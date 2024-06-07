import { NextResponse } from "next/server";
import Ticket from "../(models)/Ticket";
import { Ticket as TicketType } from "@/app/types";


export async function POST(req: Request) {
  try {
    
    const body = await req.json();

    
    const newTicket = await Ticket.create(body);

    
    return NextResponse.json(
      {
        message: "Ticket Oluşturuldu",
        data: newTicket,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Ticket oluşturulurken bir hata meydana geldi",
      },
      { status: 500 }
    );
  }
}


export async function GET(req: Request) {
  try {
    const tickets: TicketType[] = await Ticket.find();

    return NextResponse.json(
      {
        tickets,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Üzgünüz bir osrun oluştu",
        err,
      },
      { status: 500 }
    );
  }
}
