import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET (_request: NextRequest, ctx: any) {
    const supabase = createClient();
    const {params} = ctx;

    let { data: notes, error } = await supabase
    .from('notes')
    .select()
    .eq('id', params.id)

    return NextResponse.json(notes);
}

export async function PATCH (request: NextRequest, ctx: any) {
    const supabase = createClient();
    const {params} = ctx;
    const { note } = await request.json();

    const { data, error } = await supabase
    .from('notes')
    .update({ ...note })
    .eq('id', params.id)
    .select();

    return NextResponse.json(data);
}

export async function DELETE (_request: NextRequest, ctx: any) {
    const supabase = createClient();
    const {params} = ctx;

    const { error } = await supabase
    .from('notes')
    .delete()
    .eq('id', params.id) 
    return NextResponse.json({
        message:"Your note was succesfully deleted!"
    });    
}
