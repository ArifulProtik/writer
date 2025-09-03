CREATE TABLE "posts_test" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" text,
	"author_id" serial NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users_test" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_test_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "posts_test" ADD CONSTRAINT "posts_test_author_id_users_test_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users_test"("id") ON DELETE no action ON UPDATE no action;