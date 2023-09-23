import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest, 
    {params}: {params: { id: number }}) {
        //Fetch data from db
        //If not found, return 404 error
        //Else return data
        if (params.id > 10)
            return NextResponse.json({ error: 'User not found'}, { status: 404})

        return NextResponse.json({ id: 1, name: "Jon" })
}

export async function PUT(
    request: NextRequest,
    {params}: {params: { id: number }}) {

        //Validate the request body
        const body = await request.json();
        const validation = schema.safeParse(body);
        if(!validation.success)
            return NextResponse.json(validation.error.errors, { status: 400 });
    
        //Using this as an example, if we update a user with an id greater than 10, it will return with a message that the user doesn't exist
        if(params.id > 10)
            return NextResponse.json({ error: 'User not found'}, { status: 404 });

        return NextResponse.json({id: 1, name: body.name});
}

export function DELETE(
    request: NextRequest,
    {params}: {params: { id: number }}) {
        //In a real app we would fetch user from db
        //If not found, return 404
        //This only simulates a delete

        if(params.id > 10)
            return NextResponse.json({ error: 'User not found'}, { status: 404 });

        return NextResponse.json({
            message: "You have successfully deleted a user",
            id: params.id,
            name: "Jon"
        });
}