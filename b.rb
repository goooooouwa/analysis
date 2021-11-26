require 'json'
require 'pry-byebug'

domains = JSON.parse(File.read('./coolshell/domains.json'))

c = []

domains.each do |domain|
  match = c.find {|i| i[:domain] == domain }
  if match.nil?
    c.push({domain: domain, count: 1})
  else
    match[:count] += 1
  end
end

c.sort_by! {|record| record[:count]}.reverse!

File.open('./coolshell/count.json', mode='w') {|f|
  f.write(JSON.generate(c))
}

