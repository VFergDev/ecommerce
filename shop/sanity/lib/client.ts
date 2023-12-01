import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk8tl0QUHmohFKaFEJuSSjggt7qv6ET6RqTbwpfWeIo50FVmg9iWhOG8AmgIhDuQa5Hih8YXs6B4cLU3TuxksXLbSp3umUaNGw8tr5jqdF8fLTeAlh0dJ8T5bLBWTDUiSxczFsaTNXmQUyRt8k5cqsDsIO1b4k9LZgE4HI87Bt0zHBjTEnhy"
})
