import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";


export async function GET () {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)
    let { data: notes, error } = await supabase
    .from('notes')
    .select()
    .eq('user_id',user?.id)
    return NextResponse.json(notes)
}

export async function POST (request: NextRequest): Promise<NextResponse> {
    try {
        const supabase = createClient();
        const { note } = await request.json();
        const { data: { user } } = await supabase.auth.getUser()
        const { data: newNote, error } = await supabase.from("notes").insert([{ user_id: user?.id, note }]);
        if (error) {
            return NextResponse.json(
                { message: "Failed to add note", error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Note added successfully", newNote },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: "Failed to add note", error: error.message },
            { status: 500 }
        );
    }
}

