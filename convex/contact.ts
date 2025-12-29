import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const submitForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    phoneNumber: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const submissionId = await ctx.db.insert("contactSubmissions", {
      name: args.name,
      email: args.email,
      subject: args.subject,
      message: args.message,
      phoneNumber: args.phoneNumber,
      datetime: new Date().toISOString(),
    });
    return submissionId;
  },
});
